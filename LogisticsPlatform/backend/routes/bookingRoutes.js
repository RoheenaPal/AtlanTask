// backend/routes/bookingRoutes.js
const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// Create a new booking
router.post('/', async (req, res) => {
    const { userId, driverId, pickupLocation, dropLocation, price } = req.body;

    try {
        const booking = new Booking({
            userId, driverId, pickupLocation, dropLocation, price
        });
        await booking.save();
        res.status(201).json(booking);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create booking' });
    }
});

// Get booking by ID
router.get('/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        res.json(booking);
    } catch (err) {
        res.status(404).json({ error: 'Booking not found' });
    }
});

// Update booking status
router.put('/:id/status', async (req, res) => {
    const { status } = req.body;
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.json(booking);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update booking status' });
    }
});

module.exports = router;
