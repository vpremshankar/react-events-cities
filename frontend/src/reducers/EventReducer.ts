interface EventAction {
    type: string;
    payload: any;

}

interface EventState {
    city: string;
    events: [{
        owner_id: string;
        payload: {
            items: [];
            image: string;
        }
    }];
}

export const initialState:EventState = {
    city: "",
    events: [{
        owner_id: "",
        payload: {
            items: [],
            image: ""
        }
    }]
}

const EventReducer: React.Reducer<EventState, EventAction> = (state=initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "UPDATE_CITY":
            return { ...state, city: payload };
        case "UPDATE_EVENTS":
            return { ...state, events: payload };
        default:
            return state;
    }
}

export default EventReducer;