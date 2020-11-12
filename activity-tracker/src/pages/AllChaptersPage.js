import React from 'react';
import chapterInfo from '../components/ChapterInformation';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, Grid} from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        width: '80%',
        marginTop: '1%',
        margin: "auto"
    },
});

export default function GetChapters()
{
    const classes = useStyles();
    
    return(
        <>
        <h1 align="center"> Chapters </h1>
        <Grid container>
        {chapterInfo.map((info) => {
            return(
            <Grid item xs={3}>
            <Card className={classes.card}>
                <CardContent>
                    <h3 align="center">{info.id}</h3>
                </CardContent>
            </Card>
            </Grid>)
        })}
        </Grid>
        </>
    )
}