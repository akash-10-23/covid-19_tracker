import React from 'react';
import "../css/AllCards.css";
import { Typography, Grid } from '@material-ui/core';
import CardComp from './CardComp';

function AllCards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
    if (!confirmed) {
        return 'Loading...';
    }
    
    return (
        <div className="allCards">
            <Typography gutterBottom variant="h4" component="h2">
                Global
            </Typography>
            <Grid container spacing={3} justify="center">
                    <CardComp
                        className="infected"
                        cardTitle="Infected"
                        value={confirmed.value}
                        lastUpdate={lastUpdate}
                        cardSubtitle="Number of active cases of COVID-19."
                    />
                    <CardComp
                        className="recovered"
                        cardTitle="Recovered"
                        value={recovered.value}
                        lastUpdate={lastUpdate}
                        cardSubtitle="Number of recoveries from COVID-19."
                    />
                    <CardComp
                        className="deaths"
                        cardTitle="Deaths"
                        value={deaths.value}
                        lastUpdate={lastUpdate}
                        cardSubtitle="Number of deaths caused by COVID-19."
                    />
            </Grid>
        </div>
    );
}

export default AllCards;
