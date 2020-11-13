const express = require("express");
const got = require('got');
const bodyParser = require("body-parser");
const Nightmare = require('nightmare');
var nightmare = Nightmare({show:true});

var router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

router.post('/', function(req, res) {
    var website = "https://www.instagram.com/" + req.body.handle + "/";
    res.setHeader('Content-Type', 'application/json');

    getDataEmbed(website).then(function(result) {
        console.log(result);
        const re = /(\S+ \d+, \d\d\d\d)/
        res.send(JSON.stringify({website: result[0], day: result[1].match(re)[1]}))
    });
});

function getDataEmbed(website)
{
    nightmare = new Nightmare({show:true});
    
    return nightmare.goto(website)
    .evaluate(() => {
        var results = []
        if(document.querySelector('.v1Nh3.kIKUG._bz0w').innerHTML !== null)
        {
            results.push(document.querySelector('.v1Nh3.kIKUG._bz0w a').href);
        }
        if(document.querySelector('img.FFVAD') !== null)
        {
            results.push(document.querySelector('img.FFVAD').alt);
        }

        return results;
    }).end();
}

module.exports = router;