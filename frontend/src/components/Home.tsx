import React, { lazy, Suspense, useReducer, useEffect } from "react";
import SelectCity from "./SelectCity";
import { Paper } from "@mui/material";
import EventReducer, { initialState } from "../reducers/EventReducer";
import FetchJsonData from "../hooks/FetchJsonData";

const EventList = lazy(() => import("./EventList"));

const renderLoader = () => <p>Fetching events...</p>;

const HomeComponent: React.FC = () => {
    const [state, dispatch] = useReducer(EventReducer, initialState);

    useEffect(() => {
        if (state.city) {
            const fetchEvents = async () => {
                const events = await FetchJsonData('events');
                dispatch({ type: 'UPDATE_EVENTS', payload: events });
            }
            fetchEvents();
        }
        else {
            console.log(`city: ${state.city}`);
        }

    }, [state.city]);

    const updateCity = (city: string) => {
        if (city) {
            dispatch({ type: "UPDATE_CITY", payload: city });
        }
    }

    return (
        <>
            <Paper elevation={3}>
                <SelectCity city={state.city} changeCity={updateCity} />
            </Paper>
            <Paper elevation={3}>
                <Suspense fallback={renderLoader()}>
                    <EventList eventData={state.events} />
                </Suspense>
            </Paper>
        </>
    )
}

export default HomeComponent;