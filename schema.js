exports.typeDefs = `

    type Profile {
        _id: ID!
        fullName: String!
        stadium: String!
        selectedTime: String!
        level: String!
        style: String!
        favoriteTeam: String!
        age: String!
        matched: Boolean
        clearState: Boolean
        recordDate: String!
        team: String
    }

    type Query {
        searchProfilesByName (fullName: String!): [Profile]
        getAllProfiles: [Profile]
        getSelectedTeam(stadium: String!, selectedTime: String!) : [Profile]
    }

    type Mutation {
        addProfile(
            fullName: String!,
            stadium: String!,
            selectedTime: String!,
            level: String!,
            style: String!,
            favoriteTeam: String!
            age: String!): [Profile]
    }

`
