import { gql } from 'apollo-boost'

export const SIGNUP_USER = gql`
  mutation($username: String!, $password: String!, $email: String!) {
    signupUser(username: $username, password: $password, email: $email) {
      token
    }
  }
`
export const GET_ALL_PROFILES = gql`
  query {
    getAllReservations {
      _id
      username
      selectedTime
      reservedDate
    }
  }
`
