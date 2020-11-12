import React, {useState} from 'react';
import chapterInfo from '../components/ChapterInformation';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, Grid, Button, Link} from '@material-ui/core';
import ostemImage from '../resources/ostem-logo.png';
import ChapterPage from './ChapterPage';

const useStyles = makeStyles({
    card: {
        width: '80%',
        marginTop: '1%',
        margin: "auto"
    },

    ostemImage: {
        width: '50%',
    },

    button: {
        float: 'right',
        margin: '8px'
    }
});


export default function GetChapters()
{
    const classes = useStyles();

    const[currentChapterInfo, setCurrentChapterInfo] = useState([]);
    const[home, setHome] = useState(true);

    function displayPage(chapterInfo)
    {
        setHome(false);
        setCurrentChapterInfo(chapterInfo);
    }

    function displayHome()
    {
        setHome(true);
    }

    if(home)
    {
    
    return(
        <>
        <h1 align="center"> Chapters </h1>
        <Grid container>
        {chapterInfo.map((info) => {
            return(
            <Grid item xs={3}>
            <Card className={classes.card}>
                <Link onClick={() => displayPage(info)}>
                <CardContent>
                    <div align="center">
                        <img src={ostemImage} className={classes.ostemImage} alt="oSTEM" />
                    </div>
                    <h2 align="center">{info.id}</h2>
                    <Button variant ="contained" className={classes.button} color="primary"> View </Button>
                </CardContent>
                </Link>
            </Card>
            </Grid>)
        })}
        </Grid>
        </>
    )

    }

    else
    {
        return (
            <>
            <Link onClick={() => displayHome()}><h1> {"<- Back"}</h1></Link>
            <hr />
            <ChapterPage props={currentChapterInfo} />
            </>
        );
    }
}