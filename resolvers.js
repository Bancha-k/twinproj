const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user
  return jwt.sign({ username, email }, secret, { expiresIn })
}

exports.resolvers = {
  Query: {
    getCurrenUser: async (root, args, { currentUser, User }) => {
      if (!currentUser) {
        return null
      }
      const user = await User.findOne({
        username: currentUser.username
      }).populate({ path: 'demanding', model: 'Reservation' })
      return user
    },
    getUser: async (root, args, { User }) => {
      const allUser = await User.find()
      return allUser
    },
    getAllReservations: async (root, args, { Reservation }) => {
      const allReservations = await Reservation.find()
      return allReservations
    },
    getAllStadiums: () => {}
  },
  Mutation: {
    addReservation: async (
      root,
      { username, stadiumName, selectedTime, level },
      { Reservation }
    ) => {
      const newReservation = await new Reservation({
        username,
        stadiumName,
        selectedTime,
        reservedDate: new Date()
      }).save()
      return newReservation
    },
    signinUser: async (root, { username, password }, { User }) => {
      const user = await User.findOne({ username })
      if (!user) {
        throw new Error('User not found!')
      }
      const isValidPassword = await bcrypt.compare(password, user.password)
      if (!isValidPassword) {
        throw new Error('Invalid Password!')
      }
      return { token: createToken(user, 'kaneji', '1hr') }
    },
    signupUser: async (root, { username, password, email }, { User }) => {
      const user = await User.findOne({ username })
      if (user) {
        throw new Error('User already exists')
      }
      const newUser = await new User({
        username,
        password,
        email,
        role: 'USER'
      }).save()
      return { token: createToken(newUser, 'kaneji', '1hr') }
    }
  }
}
