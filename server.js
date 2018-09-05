//author: ไก่หวานน้อย
//Server Title: TwinProj App
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')

require('dotenv').config({ path: 'variables.env' })
const User = require('./models/User')
const Reservation = require('./models/Reservation')
const Stadium = require('./models/Stadium')

//To GraphQL-Express MidWare
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')

const { typeDefs } = require('./schema')
const { resolvers } = require('./resolvers')

//Make Schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

//Connect DB
mongoose
  .connect('mongodb://work:work123@172.104.161.205:27017/WORK')
  // .connect(process.env.MONGO_URL_WORK)
  .then(() => console.log('DB Connected'))
  .catch(err => console.error(err))

//Initial App
const app = express()

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}
app.use(cors(corsOptions))

//Set JWT Auth Midware
app.use(async (req, res, next) => {
  const token = req.headers['authorization']
  if (token !== 'null') {
    try {
      const currentUser = await jwt.verify(token, 'kaneji')
      req.currentUser = currentUser
    } catch (err) {
      console.error(err)
    }
  }
  next()
})

//Create GraphiQl App
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
//Connect Schema to GraphQL
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(({ currentUser }) => ({
    schema,
    context: {
      User,
      Reservation,
      Stadium,
      currentUser
    }
  }))
)

const PORT = process.env.PORT_TWIN || 4444

app.listen(PORT, () => {
  console.log(`Servering on PORT ${PORT}`)
})
