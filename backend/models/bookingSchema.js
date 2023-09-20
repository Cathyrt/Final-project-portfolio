const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  numberOfPeople: {
    type: Number,
    required :true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UUser'
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
