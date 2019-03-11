import { connect } from 'react-redux'
import { toggleFavourite } from '../actions'
import EventList from '../components/EventList'

const getEvents = (events) => {
    return events
}

const mapStateToProps = state => ({
    events: getEvents(state.events, state.filter)
})

const mapDispatchToProps = dispatch => ({
    toggleFavourite: id => dispatch(toggleFavourite(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventList)