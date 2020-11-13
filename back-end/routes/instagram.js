const express = require("express");
const got = require('got');
const bodyParser = require("body-parser");
const Nightmare = require('nightmare');
const nightmare = Nightmare({show:true});

var router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

router.post('/', function(req, res) {
    var website = "https://www.instagram.com/" + req.body.handle + "/";
    res.setHeader('Content-Type', 'application/json');

    getData(website).then(function(result) {
        console.log(result);
        res.send(JSON.stringify({website: result}))
    });
});

function getData(website)
{
    return nightmare.goto(website)
    .evaluate(() => {
        if(document.querySelector('.v1Nh3.kIKUG._bz0w').innerHTML !== null)
        {
            return document.querySelector('.v1Nh3.kIKUG._bz0w a').href;
        }
    }).end()
}

module.exports = router;