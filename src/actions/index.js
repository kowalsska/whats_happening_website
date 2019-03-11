let nextEventId = 680
export const addEvent = (info) => ({
    type: 'ADD_EVENT',
    id: nextEventId++,
    name: info.name,
    city: info.city,
    eventType: info.eventType,
    startDate: info.startDate,
})

export const filterEvent = filter => ({
    type: 'FILTER_EVENTS',
    filter
})

export const toggleFavourite = id => ({
    type: 'TOGGLE_FAVOURITE',
    id
})
