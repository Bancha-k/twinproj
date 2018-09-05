import React from 'react'
import { withRouter } from 'react-router-dom'

import Error from '../Error'
import { Mutation } from 'react-apollo'
import { SIGNUP_USER } from '../../queries'

const initialState = {
  username: '',
  email: '',
  password: ''
}

class Signup extends React.Component {
  state = {
    ...initialState
  }

  clearState = () => {
    this.setState({ ...initialState })
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (event, signupUser) => {
    event.preventDefault()
    signupUser().then(async ({ data }) => {
      console.log(data)
      localStorage.setItem('token', data.signupUser.token)
      await this.props.refetch()
      alert('Successfully Registration!')
      this.props.history.push('/')
    })
  }

  // validateForm = () => {
  //   const { username, email, password } = this.state
  //   const isInValid = !username || !email || !password
  //   return isInValid
  // }

  render() {
    const { username, email, password } = this.state
    return (
      <div className="App">
        <h2 className="App">Signup</h2>
        <Mutation
          mutation={SIGNUP_USER}
          variables={{
            username,
            email,
            password
          }}
        >
          {(signupUser, { data, loading, error }) => {
            return (
              <form
                className="form"
                onSubmit={event => this.handleSubmit(event, signupUser)}
              >
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleChange}
                  style={{ width: 400 }}
                />
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.handleChange}
                  style={{ width: 400 }}
                />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                  style={{ width: 400 }}
                />
                <button
                  type="submit"
                  // disabled={loading || this.validateForm()}
                  className="button-primary"
                >
                  Submit
                </button>
                {error && <Error error={error} />}
              </form>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default withRouter(Signup)
