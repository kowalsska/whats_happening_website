import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Event from './Event'

const FEED_QUERY = gql`
{
    allEvents{
        id
        name
        city
        country
        startDate
        type
    }
  }
`

const Events = () => (
    <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
            if (loading) return <p>Good things take time....</p>
            if (error) return <p>Something went wrong...</p>

            return <div className="row">{data.allEvents.map(event => <Event event={event} />)}</div>
        }}
    </Query>
)

export default Events