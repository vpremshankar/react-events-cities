import React from "react";
import {
    Typography,
    Grid
} from '@mui/material';
import EventCard from "./EventCard";

type EventListProps = {
    eventData: [{
        owner_id: string;
        payload: {
            items: [];
            image: string;
        }
    }];
}

const EventList: React.FC<EventListProps> = ({ eventData }) => {
    console.log(eventData);
    return (
        <Grid container spacing={2} sx={{ m: 5 }}>
            {
                    eventData.map(item => {
                        return item.payload.items.map(events => {
                            return (
                                <Grid item xs={3}>
                                    <EventCard events={events} image={item.payload.image} />
                                </Grid>
                            )
                        })
                    })
            }
        </Grid>
    )
}

export default EventList;