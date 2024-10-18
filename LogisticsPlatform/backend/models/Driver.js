const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    vehicleType: { type: String, required: true },
    currentLocation: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    },
    availability: { type: Boolean, default: true }
});

const Driver = mongoose.model('Driver', driverSchema);
module.exports = Driver;
