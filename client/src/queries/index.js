import { gql } from 'apollo-boost'

export const SEARCH_PROFILES_BY_NAME = gql`
  query($fullName: String!) {
    searchProfilesByName(fullName: $fullName) {
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

export const GET_PLAYER = gql`
  query($stadium: String!, $selectedTime: String!) {
    getSelectedTeam(stadium: $stadium, selectedTime: $selectedTime) {
      _id
      fullName
      team
    }
  }
`

export const CLEAR_PLAYER = gql`
  mutation($stadium: String!, $selectedTime: String!) {
    clearSelectedTeam(stadium: $stadium, selectedTime: $selectedTime) {
      _id
      fullName
      team
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
      stadium
      selectedTime
      level
      style
      favoriteTeam
      age
      matched
      clearState
      recordDate
    }
  }
`
