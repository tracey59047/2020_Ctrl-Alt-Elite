import React, {useEffect, useState} from 'react';
import {AppBar, Tabs, Tab, Card, CardContent, Grid, Paper} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';

function TabPanel(props)
{
    const { children, value, index} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
    >
      {value === index && (
        children
      )}
    </div>
  );
}

function Profile(props)
{
    const classes = useStyles();
    const chapterInfo = props.chapterInfo;

    return (
        <>
            <h2>Chapter Information</h2>
            <Grid container spacing={0}>
                <Grid item xs={3}>
                    <h4 className={classes.grid}>Chapter Name </h4>
                </Grid>
                <Grid item xs={9}>
                    <subtitle1 className={classes.grid}>{chapterInfo.id}</subtitle1>
                </Grid>
                <Grid item xs={3}>
                    <h4 className={classes.grid}>Institution Name </h4>
                </Grid>
                <Grid item xs={9}>
                    <subtitle1 className={classes.grid}>{chapterInfo.institution}</subtitle1>
                </Grid>
                <Grid item xs={3}>
                    <h4 className={classes.grid}>Chapter Type </h4>
                </Grid>
                <Grid item xs={9}>
                    <subtitle1 className={classes.grid}>{chapterInfo.type}</subtitle1>
                </Grid>
                <Grid item xs={3}>
                    <h4 className={classes.grid}>Region </h4>
                </Grid>
                <Grid item xs={9}>
                    <subtitle1 className={classes.grid}>{chapterInfo.region}</subtitle1>
                </Grid>
                <Grid item xs={3}>
                    <h4 className={classes.grid}>Status</h4>
                </Grid>
                <Grid item xs={9}>
                    <subtitle1 className={classes.grid}>{chapterInfo.status}</subtitle1>
                </Grid>
                <Grid item xs={3}>
                    <h4 className={classes.grid}>Official Email Address </h4>
                </Grid>
                <Grid item xs={9}>
                    <subtitle1 className={classes.grid}>{chapterInfo.email}</subtitle1>
                </Grid>
                <Grid item xs={3}>
                    <h4 className={classes.grid}>Alternate Email Address </h4>
                </Grid>
                <Grid item xs={9}>
                    <subtitle1 className={classes.grid}>{chapterInfo.altemail}</subtitle1>
                </Grid>
                <Grid item xs={3}>
                    <h4 className={classes.grid}>Phone Number </h4>
                </Grid>
                <Grid item xs={9}>
                    <subtitle1 className={classes.grid}>{chapterInfo.phone}</subtitle1>
                </Grid>
            </Grid>
    </>);
}

function Leadership(props)
{
    const classes = useStyles();
    const chapterInfo = props.chapterInfo;

    return (
        <>
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
            
    </>);
}

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

function ChapterPage(props)
{
    const chapterInfo = props.props;

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return(
        <>
        <h1>Chapter / {chapterInfo.id}</h1>
        <AppBar position="static">
        <Tabs value={value} className={classes.tabs} onChange={handleChange}>
            <Tab className={classes.tabs} label="Profile" />
            <Tab className={classes.tabs} label="Leadership" />
            <Tab className={classes.tabs} label="Activity Tracker" />
        </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            <Card className={classes.card}>
                <CardContent>
                    <Profile chapterInfo={chapterInfo} />
                </CardContent>
            </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Card className={classes.card}>
                <CardContent>
                    <Leadership chapterInfo={chapterInfo} />
                </CardContent>
            </Card>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <embed src={"https://www.instagram.com/ouaises/"} type="text/html" width="20%" height="500">

            </embed>
        </TabPanel>
        </>
    );
}

export default ChapterPage;