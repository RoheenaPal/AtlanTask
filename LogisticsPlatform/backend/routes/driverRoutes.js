// backend/routes/driverRoutes.js
const express = require('express');
const Driver = require('../models/Driver');
const router = express.Router();

// Get driver details
router.get('/:id', async (req, res) => {
    try {
        const driver = await Driver.findById(req.params.id);
        res.json(driver);
    } catch (err) {
        res.status(404).json({ error: 'Driver not found' });
    }
});

// Update driver location
router.put('/:id/location', async (req, res) => {
    const { lat, lng } = req.body;
    try {
        const driver = await Driver.findByIdAndUpdate(req.params.id, { currentLocation: { lat, lng } }, { new: true });
        res.json(driver);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update location' });
    }
});

module.exports = router;
