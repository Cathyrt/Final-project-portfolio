const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const Booking = require('./models/bookingSchema');

const app = express();


mongoose.connect('mongodb+srv://gumbochumalisa8:Q8gAPONw7EZss420@cluster0.cgaegjm.mongodb.net',{
  useNewUrlParser : true,
  useUnifiedTopology: true,
  });


  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
  
  app.use(cors());
  app.use(bodyParser.json());
  
  // Create a new booking (POST request)
  app.post('/bookings', async (req, res) => {
    try {
      const { date, numberOfPeople } = req.body;
      
      const newBooking = new Booking({ date, numberOfPeople });
  
      // Save the booking to the database
      await newBooking.save();
  
      res.status(201).json(newBooking);
    } catch (error) {
      console.error('Error creating booking:', error);
      res.status(500).json({ error: 'Error creating booking' });
    }
  });
  
  
  app.get('/', async (req, res) => {
    try {
      const bookings = await Booking.find();
      res.status(200).json(bookings);
    } catch (error) {
      console.error('Error retrieving bookings:', error);
      res.status(500).json({ error: 'Error retrieving bookings' });
    }
  });
  
  // Start the Express server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });  