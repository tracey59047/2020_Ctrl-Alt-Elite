import React, {useState} from 'react';
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

function ChapterPage(chapterInfo)
{
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <>
        <h1>Chapter / oStem at Auburn</h1>
        <AppBar position="static">
        <Tabs value={value} className={classes.tabs} onChange={handleChange}>
            <Tab className={classes.tabs} label="Profile" />
            <Tab className={classes.tabs} label="Leadership" />
            <Tab className={classes.tabs} label="Members" />
            <Tab className={classes.tabs} label="Activity Tracker" />
        </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            <Card className={classes.card}>
                <CardContent>
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
                </CardContent>
            </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
            Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
            Item Four
        </TabPanel>
        </>
    );
}

export default ChapterPage;