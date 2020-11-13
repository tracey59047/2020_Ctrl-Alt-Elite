import React from 'react';
import {Grid, Card, CardContent} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        width: '90%',
        marginTop: '1%',
        margin: "auto"
    },

    tabs: {
        backgroundColor: "white",
        color: "black",
        fontSize: "15px",
        fontWeight: ""
    },

    grid: {
        marginTop: '8px',
        marginBottom: '8px'
    }
});

export default function Leadership(props)
{
    const chapterInfo = props.chapterInfo;
    const classes = useStyles();

    return (
        <>
            <Card className={classes.card}>
            <CardContent>
            <h2>Leadership</h2>
            <Grid container spacing={2} classesName={classes.root}>
                <Grid item xs={6} classesName={classes.root} >
                    <Card >
                        <CardContent>
                        <Grid id = "top-row" align = "center"><h4 >President </h4></Grid>
                        <Grid id = "middle-row" align = "center"><subtitle1 >{chapterInfo.pres}</subtitle1></Grid>
                        <Grid id = "bottom-row" align = "center"><subtitle1 >{chapterInfo.email}</subtitle1></Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} classesName={classes.root}>
                    <Card >
                        <CardContent>
                        <Grid id = "top-row" align = "center"><h4 >Advisor </h4></Grid>
                        <Grid id = "middle-row" align = "center"><subtitle1 >{chapterInfo.advisor}</subtitle1></Grid>
                        <Grid id = "bottom-row" align = "center"><subtitle1 >{chapterInfo.email}</subtitle1></Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} classesName={classes.root}>
                    <Card >
                        <CardContent>
                        <Grid id = "top-row" align = "center"><h4 >Vice President </h4></Grid>
                        <Grid id = "middle-row" align = "center"><subtitle1 >{chapterInfo.vp}</subtitle1></Grid>
                        <Grid id = "bottom-row" align = "center"><subtitle1 >{chapterInfo.email}</subtitle1></Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} classesName={classes.root}>
                    <Card >
                        <CardContent>
                        <Grid id = "top-row" align = "center"><h4 >Treasurer </h4></Grid>
                        <Grid id = "middle-row" align = "center"><subtitle1 >{chapterInfo.treas}</subtitle1></Grid>
                        <Grid id = "bottom-row" align = "center"><subtitle1 >{chapterInfo.email}</subtitle1></Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            </CardContent>
            </Card>
    </>);
}