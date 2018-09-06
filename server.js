//author: ไก่หวานน้อย
//Server Title: TwinProj App
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config({ path: 'variables.env' })
const Profile = require('./models/Profile')

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
  // .connect('mongodb://work:work123@172.104.161.205:27017/WORK')
  .connect(
    process.env.MONGO_URL_WORK,
    { useNewUrlParser: true }
  )
  .then(() => console.log('DB Connected'))
  .catch(err => console.error(err))

//Initial App
const app = express()

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}
app.use(cors(corsOptions))

//Create GraphiQl App
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
//Connect Schema to GraphQL
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: {
      Profile
    }
  })
)

const PORT = process.env.PORT_WORK || 4444

app.listen(PORT, () => {
  console.log(`Servering on PORT ${PORT}`)
})
