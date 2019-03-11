const events = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    favourite: false,
                    city: action.city,
                    type: action.eventType,
                    startDate: action.startDate.toLocaleString().split(',')[0],
                }
            ]
        case 'TOGGLE_FAVOURITE':
            console.log("toggled");
            return state.map(event =>
                event.id === action.id ? { ...event, favourite: !event.favourite } : event
            )

        case 'FILTER_EVENTS':
            return state.filter(event =>
                event.id === action.id ? { ...event, favourite: !event.favourite } : event
            )
        default:
            return state
    }
}

export default events