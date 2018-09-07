import { gql } from 'apollo-boost'

export const GET_ALL_PROFILES = gql`
  {
    getAllProfiles {
      _id
      fullName
      selectedTime
      level
      stadium
      style
      age
      favoriteTeam
      matched
      clearState
      recordDate
    }
  }
`

export const ADD_PROFILE = gql`
  mutation(
    $fullName: String!
    $stadium: String!
    $selectedTime: String!
    $level: String!
    $style: String!
    $favoriteTeam: String!
    $age: String!
  ) {
    addProfile(
      fullName: $fullName
      stadium: $stadium
      selectedTime: $selectedTime
      level: $level
      style: $style
      favoriteTeam: $favoriteTeam
      age: $age
    ) {
      _id
      fullName
    }
  }
`
