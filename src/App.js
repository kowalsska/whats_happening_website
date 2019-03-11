import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import DisplayEventList from './containers/DisplayEventList'
import SearchBar from './components/SearchBar'
import AddEvent from './containers/AddEvent'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
})

const App = () => (
  <ApolloProvider client={client}>
    <SearchBar />
    <div>
      <AddEvent />
      <DisplayEventList />
    </div>
  </ApolloProvider>
)

export default App
