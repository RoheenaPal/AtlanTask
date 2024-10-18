// Example: Booking Form (React Component)
import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [priceEstimate, setPriceEstimate] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/bookings', { pickup, dropoff, vehicleType });
            console.log('Booking Successful', response.data);
        } catch (error) {
            console.error('Booking Error', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Pickup Location" onChange={(e) => setPickup(e.target.value)} />
            <input type="text" placeholder="Dropoff Location" onChange={(e) => setDropoff(e.target.value)} />
            <select onChange={(e) => setVehicleType(e.target.value)}>
                <option value="bike">Bike</option>
                <option value="van">Van</option>
            </select>
            {priceEstimate && <p>Estimated Price: {priceEstimate}</p>}
            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;
