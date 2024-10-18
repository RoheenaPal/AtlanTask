const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: String,
    address: String,
    role: { type: String, enum: ['user', 'driver'], required: true }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
