exports.typeDefs = `

    type Profile {
        _id: ID!
        fullName: String!
        stadium: String!
        selectedTime: String!
        level: String!
        style: String!
        age: String!
        favoriteTeam: String!
        matched: Boolean
        clearState: Boolean
        recordDate: String!
    }

    type Query {
        getAllProfiles: [Profile]
    }

    type Mutation {
        addProfile(
            fullName: String!,
            stadium: String!,
            selectedTime: String!,
            level: String!,
            style: String!,
            age: String!,
            favoriteTeam: String!): Profile
    }

`
