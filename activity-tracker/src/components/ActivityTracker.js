import React from 'react';
import {Card, CardContent, Grid} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import {TwitterTweetEmbed} from 'react-twitter-embed';
import fbimage from '../resources/facebook-image.JPG'


const useStyles = makeStyles({
    card: {
        width: '90%',
        marginTop: '1%',
        alignItems: 'center',
        margin: "2%",
    },

    mainCard: {
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
    },

    iframecontainer: {
        position: 'relative',
        width: '100%',
        paddingTop: '151%'
    },

    iframe: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
    }
});

export default function Profile(props)
{
    const classes = useStyles();
    const instagram = props.instagram;

    return (
        <>
            <div id="fb-root"></div>
            <script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
            <Card className={classes.mainCard}>
            <CardContent>
            <h2>Activity Tracker</h2>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <Card className={classes.card}>
                        <CardContent>
                        <h4 className={classes.grid}>Welcome to the Activity Tracker! </h4>
                        <p>This tool was created at the oSTEM 10th Annual Convention Hackathon by Team Ctrl-Alt-Elite. 
                            It allows oSTEM to keep better track of active and inactive chapters. Here, you can view the chapter's
                            latest post on Instagram and easily see when they last posted. The goal would be to show the latest social media
                            post based on date. This date would also be used to determine if a chapter is active or not
                        </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className={classes.card}>
                        <CardContent>
                            <h4 className={classes.grid}>SOCIAL MEDIA ACTIVITY</h4>
                            <Grid container spacing={0}>
                                <Grid item xs={4}>
                                    <p>Instagram: </p>
                                </Grid>
                                <Grid item xs={8}>
                                    <p>{instagram.day}</p>
                                </Grid>
                                <Grid item xs={4}>
                                    <p>Facebook: </p>
                                </Grid>
                                <Grid item xs={8}>
                                    <p>DATE HERE</p>
                                </Grid>
                                <Grid item xs={4}>
                                    <p>Twitter: </p>
                                </Grid>
                                <Grid item xs={8}>
                                    <p>DATE HERE</p>
                                </Grid>
                                <Grid item xs={4}>
                                    <p>Linkedin: </p>
                                </Grid>
                                <Grid item xs={8}>
                                    <p>DATE HERE</p>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <h5>Latest Instagram Post</h5>
                            <div align="center" className={classes.iframecontainer}>
                                <iframe src={instagram.website + "embed/"} title="Instagram" frameborder="0" className={classes.iframe}></iframe>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <h5>Example Twitter Post</h5>
                            <TwitterTweetEmbed tweetId={'1305686162627936256'} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <h5>Example Facebook Post</h5>
                            <div align="center">
                                <img src={fbimage} width="100%" alt="Facebook Post"/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <h5>Example Linkedin Post</h5>
                            <div align="center" className={classes.iframecontainer}>
                                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6732859656865116160"  className={classes.iframe} frameborder="0" allowfullscreen="" title="LinkedIn"></iframe>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            </CardContent>
            </Card>
    </>);
}