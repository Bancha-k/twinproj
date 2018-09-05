const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StadiumSchema = new Schema({
  name: { type: String, required: true },
  periodTime: { type: String, required: true }, // Stadium Opening Time
  like: { type: Number, default: 0 },
  createdDate: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Stadium', StadiumSchema)
