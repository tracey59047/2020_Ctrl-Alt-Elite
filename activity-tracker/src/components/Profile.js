import React from 'react';
import {Grid} from '@material-ui/core';
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

export default function Profile(props)
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