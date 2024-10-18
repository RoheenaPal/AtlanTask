// const io = require('socket.io')(server);

// io.on('connection', (socket) => {
//     console.log('User connected');
//     socket.on('driverLocationUpdate', (data) => {
//         io.emit('locationUpdate', data);
//     });
// });

// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

const bookingRoutes = require('./routes/bookingRoutes');
const driverRoutes = require('./routes/driverRoutes');

// Setup server for Socket.io
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('driverLocationUpdate', (data) => {
        io.emit('locationUpdate', data);  // Broadcast location to all clients
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Basic route to test server
app.get('/', (req, res) => {
    res.send('Logistics Platform API is running');
});

// Routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/drivers', driverRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
