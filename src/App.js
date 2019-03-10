import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Events from './components/Events'
import SearchBar from './components/SearchBar'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
})

const App = () => (
  <ApolloProvider client={client}>
    <SearchBar />
    <div className="container">
      <Events />
    </div>
  </ApolloProvider>
)

export default App
