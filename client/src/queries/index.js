import { gql } from 'apollo-boost'

export const GET_ALL_PROFILES = gql`
  {
    getAllProfiles {
      _id
      fullName
      selectedTime
      level
      style
      age
      favoriteTeam
      matched
      clearState
      recordDate
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
