// frontend/src/components/Booking.js
import React, { useState } from 'react';
import axios from 'axios';

function Booking() {
    const [pickupLocation, setPickupLocation] = useState({ lat: '', lng: '' });
    const [dropLocation, setDropLocation] = useState({ lat: '', lng: '' });
    const [price, setPrice] = useState(0);
    const [response, setResponse] = useState('');

    const handleBooking = async () => {
        try {
            const bookingData = {
                userId: '123', // Placeholder ID
                driverId: '456', // Placeholder driver ID
                pickupLocation,
                dropLocation,
                price: 100, // Placeholder price
            };

            const res = await axios.post('http://localhost:5000/api/bookings', bookingData);
            setResponse(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Book a Vehicle</h2>
            <label>
                Pickup Latitude:
                <input type="text" value={pickupLocation.lat} onChange={(e) => setPickupLocation({ ...pickupLocation, lat: e.target.value })} />
            </label>
            <label>
                Pickup Longitude:
                <input type="text" value={pickupLocation.lng} onChange={(e) => setPickupLocation({ ...pickupLocation, lng: e.target.value })} />
            </label>
            <br />
            <label>
                Drop Latitude:
                <input type="text" value={dropLocation.lat} onChange={(e) => setDropLocation({ ...dropLocation, lat: e.target.value })} />
            </label>
            <label>
                Drop Longitude:
                <input type="text" value={dropLocation.lng} onChange={(e) => setDropLocation({ ...dropLocation, lng: e.target.value })} />
            </label>
            <br />
            <button onClick={handleBooking}>Book Now</button>

            {response && <div>Booking ID: {response._id}</div>}
        </div>
    );
}

export default Booking;
