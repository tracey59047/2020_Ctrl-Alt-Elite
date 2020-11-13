import React, {useEffect, useState} from 'react';
import {AppBar, Tabs, Tab, Card, CardContent, Grid} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import Profile from '../components/Profile'
import Leadership from '../components/Leadership'
import ActivityTracker from '../components/ActivityTracker'

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

function ChapterPage(props)
{
    const chapterInfo = props.props;
    const site = "http://localhost:9000/instagram"

    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [instagram, setInstagram] = useState();

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
            setInstagram(response);
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
            <Profile chapterInfo={chapterInfo} />
        </TabPanel>
        <TabPanel value={value} index={1}>  
            <Leadership chapterInfo={chapterInfo} />
        </TabPanel>
        <TabPanel value={value} index={2}> 
            {instagram !== undefined ? <ActivityTracker chapterInfo={chapterInfo} instagram={instagram} /> : null}
        </TabPanel>
        </>
    );
}

export default ChapterPage;