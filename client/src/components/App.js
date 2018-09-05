import React from 'react'
import './App.css'

import { Query } from 'react-apollo'
import { GET_ALL_RESERVATIONS } from '../queries'

const App = () => (
  <div className="App">
    <h1>Home</h1>
    <Query query={GET_ALL_RESERVATIONS}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>
        if (error) return <div>Error...</div>
        return <p>Reservations</p>
      }}
    </Query>
  </div>
)

export default App
