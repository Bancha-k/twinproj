const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new Schema(
  {
    fullName: { type: String, required: true },
    stadium: { type: String, required: true },
    selectedTime: { type: String, required: true },
    level: { type: String, required: true },
    style: { type: String, required: true },
    favoriteTeam: { type: String, required: true },
    age: { type: String, required: true },
    matched: { type: Boolean, required: true },
    clearState: { type: Boolean, required: true },
    recordDate: { type: Date, default: Date.now }
  },
  { versionKey: false }
)

module.exports = mongoose.model('Profile', ProfileSchema)
