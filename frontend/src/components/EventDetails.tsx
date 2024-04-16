import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchJsonData from "../hooks/FetchJsonData";
import { Button, Grid, Typography, Paper } from "@mui/material";

type MapItem = {
    payload: {
        items: [];
        event_date: string;
        event_time: string;
        image: string;
    }
}

type MapEvent = {
    event_id: string;
    event_name: string;
    image: string
    event_title: string;
    event_description: string;
    orig_price: string;
    sell_price: string;
}

const EventDetails: React.FC = () => {
    const eventId = useParams();
    const [eventData, setEventData] = useState('');
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        if (!eventData) {
            const fetchEvents = async () => {
                const events = await FetchJsonData('events');
                const itemsData = events.flatMap((item: MapItem) => item.payload);
                setImageSrc(() => itemsData[0].image);
                itemsData.map((items: MapEvent) => {
                    const eventsData = itemsData.items.filter((event: MapEvent) => event.event_id === eventId.id);
                    setEventData(() => eventsData[0]);
                });

            }
            fetchEvents();
        }
    }, []);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper elevation={3}>
                        <img src={imageSrc} alt="Event Image" />
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper elevation={3}>
                        <Typography variant="h6">
                            {`${eventData.event_date} , ${eventData.event_time}`}
                        </Typography>
                        <Typography>
                            {eventData.event_title}
                        </Typography>
                        <Typography>
                            {eventData.event_name}
                        </Typography>
                    </Paper>

                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3}>
                        <Typography sx={{ textDecoration: 'line-through' }}>
                            {eventData.orig_price}
                        </Typography>
                        <Typography>
                            {eventData.sell_price}
                        </Typography>
                        <Button>
                            Book Event
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item>
                    <Paper elevation={3}>
                        {eventData.event_description}
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item>
                    <Paper elevation={3}>
                        <Typography>
                            {`
                                ${eventData.location.loc_address.company_name}, 
                                ${eventData.location.loc_address.address_1},
                                ${eventData.location.loc_address.address_2},
                                ${eventData.location.loc_address.city_name},
                                ${eventData.location.loc_address.state_short_name},
                                ${eventData.location.loc_address.country_name}
                            `}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>

    );
}

export default EventDetails;