const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', required: true },
    pickupLocation: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    },
    dropLocation: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    },
    price: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'accepted', 'in_progress', 'completed'], default: 'pending' }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
