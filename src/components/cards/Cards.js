import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import "./card.css";
import CountUp from "react-countup"


export default function Cards({data}) {
    const {confirmed,recovered,deaths,lastUpdate}=data;
    if(!confirmed){
        return "loading..."
    }
    return (
        <div className="container">
            <Grid container spacing={3} justifyContent="center">
                <Grid item component={Card} xs={12} md={3} className=" card infected">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected People</Typography>
                        <Typography variant="h5"><CountUp  start={0} end={confirmed.value} duration={2.75} separator=" ">{confirmed.value}</CountUp></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active case of covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className=" card recovered">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>recovered</Typography>
                        <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2.75} separator=",">{recovered.value}</CountUp></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recovered cases from covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className=" card deaths">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2.75} separator=",">{deaths.value}</CountUp></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of death caused by covid19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
