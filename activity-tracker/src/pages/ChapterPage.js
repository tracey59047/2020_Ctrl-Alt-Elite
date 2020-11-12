import React, {useState} from 'react';
import {AppBar, Tabs, Tab} from '@material-ui/core';

function TabPanel(props)
{
    const { children, value, index} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
    >
      {value === index && (
        <h1>{children}</h1>
      )}
    </div>
  );
}

function ChapterPage()
{
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <>
        <h1>Other things above here</h1>
        <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Profile" />
            <Tab label="Leadership" />
            <Tab label="Members" />
            <Tab label="Activity Tracker" />
        </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
            Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item Three
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item Four
        </TabPanel>
        </>
    );
}

export default ChapterPage;