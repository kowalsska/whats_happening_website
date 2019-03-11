// import React from 'react'
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux'
// import { toggleFavourite } from '../actions'
// import { Query } from 'react-apollo'
// import gql from 'graphql-tag'

// import Event from './Event'

// const FEED_QUERY = gql`
// {
//     allEvents{
//         id
//         name
//         city
//         country
//         startDate
//         type
//     }
//   }
// `

// const EventList = ({ toggleFavourite }) => (
//     <Query query={FEED_QUERY}>
//         {({ loading, error, data }) => {
//             if (loading) return <p>Good things take time....</p>
//             if (error) return <p>Something went wrong...</p>

//             return <div className="row">{data.allEvents.map(event => <Event key={event.id} event={event} favourite={false} onClick={() => toggleFavourite(event.id)} />)}</div>
//         }}
//     </Query>
// )

// EventList.propTypes = {
//     // // events: PropTypes.arrayOf(
//     // //     PropTypes.shape({
//     // //         id: PropTypes.number.isRequired,
//     // //         completed: PropTypes.bool.isRequired,
//     // //         text: PropTypes.string.isRequired
//     // //     }).isRequired
//     // // ).isRequired,
//     // toggleFavourite: PropTypes.func.isRequired
// }

// const mapDispatchToProps = dispatch => ({
//     toggleFavourite: id => dispatch(toggleFavourite(id))
// })

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(EventList)

import React from 'react'
import PropTypes from 'prop-types'
import Event from './Event'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';

const EventList = ({ events, toggleFavourite }) => (
    <div style={styles.container}>
        {events.map(event => (
            <Event key={event.id} event={event} onClick={() => toggleFavourite(event.id)} />
        ))}
    </div>
)

EventList.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            favourite: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired,
    toggleFavourite: PropTypes.func.isRequired
}

const styles = {
    container: {
        flex: 1,
        float: "right",
    },
};

export default withStyles(styles)(EventList);