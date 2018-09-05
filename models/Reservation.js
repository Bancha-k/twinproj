const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReservationSchema = new Schema({
  username: { type: String, required: true },
  stadiumName: { type: String, required: true },
  selectedTime: { type: String, required: true }, // Stadium Opening Time
  reservedDate: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Reservation', ReservationSchema)
