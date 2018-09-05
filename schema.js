exports.typeDefs = `

    type User {
        _id: ID!
        username: String! @unique
        password: String!
        email: String!
        role: UserRole!
        demanding: [Reservation]
        createdDate: String
    }

    enum UserRole {
        ADMIN
        USER
    }

    type Reservation {
        _id: ID!
        username: String!
        stadiumName: String!
        selectedTime: String!
        reservedDate: String
    }

    type Stadium {
        _id: ID!
        name: String!
        periodTime: String!
        like: Int
        createdDate: String
    }

    type Token {
        token: String!
    }

    type Query {
        getCurrenUser: User
        getUser: [User]
        getAllReservations: [Reservation]
        getAllStadiums: [Stadium]
    }

    type Mutation {
        addReservation(
            username: String!, 
            stadiumName: String!, 
            selectedTime: String!): Reservation
        signinUser(username: String!, password: String!): Token
        signupUser(
            username: String!, 
            password: String!,
            email: String!
        ): Token
    }

`
