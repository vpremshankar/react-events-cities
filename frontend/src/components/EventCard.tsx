import React from "react";
import {
    Card,
    CardActions,
    CardHeader,
    CardContent,
    CardActionArea,
    CardMedia,
    Button,
    Typography,
} from '@mui/material';
import { useNavigate } from "react-router-dom";

type EventCardProps = {
    events: {
        event_name: string;
        event_id: number;
        event_title: string;
        event_description: string;
    },
    image: string;
}

const EventCard: React.FC<EventCardProps> = ({ events, image }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/events/${events.event_id}`, { replace: true });
    }

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="event image"
                />
                <CardHeader>
                    {events.event_name}
                </CardHeader>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {events.event_description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" onClick={handleClick}>Learn More</Button>
            </CardActions>
        </Card>

    )
}

export default EventCard;