import { gql } from 'apollo-boost'

export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`
export const SIGNUP_USER = gql`
  mutation($username: String!, $password: String!, $email: String!) {
    signupUser(username: $username, password: $password, email: $email) {
      token
    }
  }
`
export const GET_CURRENT_USER = gql`
  query {
    getCurrenUser {
      username
      email
      role
      createdDate
    }
  }
`
export const GET_ALL_RESERVATIONS = gql`
  query {
    getAllReservations {
      _id
      username
      selectedTime
      reservedDate
    }
  }
`
