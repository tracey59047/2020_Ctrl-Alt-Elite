import React, {useEffect, useState} from 'react';
import {AppBar, Tabs, Tab, Card, CardContent, Grid} from '@material-ui/core';
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
                    <h5 className={classes.grid}>Chapter Name </h5>
                </Grid>
                <Grid item xs={9}>
                    <h5 className={classes.grid}>{chapterInfo.id}</h5>
                </Grid>
                <Grid item xs={3}>
                    <h5 className={classes.grid}>Institution Name </h5>
                </Grid>
                <Grid item xs={9}>
                    <h5 className={classes.grid}>{chapterInfo.institution}</h5>
                </Grid>
                <Grid item xs={3}>
                    <h5 className={classes.grid}>Chapter Type </h5>
                </Grid>
                <Grid item xs={9}>
                    <h5 className={classes.grid}>{chapterInfo.type}</h5>
                </Grid>
                <Grid item xs={3}>
                    <h5 className={classes.grid}>Region </h5>
                </Grid>
                <Grid item xs={9}>
                    <h5 className={classes.grid}>{chapterInfo.region}</h5>
                </Grid>
                <Grid item xs={3}>
                    <h5 className={classes.grid}>Status</h5>
                </Grid>
                <Grid item xs={9}>
                    <h5 className={classes.grid}>{chapterInfo.status}</h5>
                </Grid>
                <Grid item xs={3}>
                    <h5 className={classes.grid}>Official Email Address </h5>
                </Grid>
                <Grid item xs={9}>
                    <h5 className={classes.grid}>{chapterInfo.email}</h5>
                </Grid>
                <Grid item xs={3}>
                    <h5 className={classes.grid}>Alternate Email Address </h5>
                </Grid>
                <Grid item xs={9}>
                    <h5 className={classes.grid}>{chapterInfo.altemail}</h5>
                </Grid>
                <Grid item xs={3}>
                    <h5 className={classes.grid}>Phone Number </h5>
                </Grid>
                <Grid item xs={9}>
                    <h5 className={classes.grid}>{chapterInfo.phone}</h5>
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
    const site = "http://localhost:9000/instagram"

    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [url, setUrl] = useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {

        async function getSite()
        {
            return await fetch(site, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'handle': chapterInfo.handle})
            }).then((response) => response.json());
        }

        getSite().then((response) => {
            setUrl(response);
        });
        
    }, [chapterInfo.handle]);


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
            </Card>
        </TabPanel>
        <TabPanel value={value} index={2}>
            {url !== undefined ? <iframe src={url.website + "embed/"} title="Instagram" width="20%" height="530"> </iframe> : null}
        </TabPanel>
        </>
    );
}

export default ChapterPage;