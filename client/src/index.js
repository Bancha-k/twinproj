import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import './index.css'
import App from './components/App'
import Profile from './components/Profile'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'http://localhost:5555/graphql',
  fetchOptions: {
    credentials: 'include'
  },
  // request: operation => {
  //   const token = localStorage.getItem('token')
  //   operation.setContext({
  //     headers: {
  //       authorization: token
  //     }
  //   })
  // },
  onError: ({ networkError }) => {
    if (networkError) {
      console.log('Network Error!', networkError)
    }
  }
})

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/profile" exact component={Profile} />
      <Redirect to="/profile" />
    </Switch>
  </Router>
)

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById('root')
)
