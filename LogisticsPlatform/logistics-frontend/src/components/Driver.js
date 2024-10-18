// frontend/src/components/Driver.js
import React, { useState } from 'react';
import axios from 'axios';

function Driver() {
    const [driverId, setDriverId] = useState('456'); // Placeholder driver ID
    const [location, setLocation] = useState({ lat: '', lng: '' });
    const [status, setStatus] = useState('available');

    const updateLocation = async () => {
        try {
            await axios.put(`http://localhost:5000/api/drivers/${driverId}/location`, location);
            alert('Location updated!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Driver Dashboard</h2>
            <label>
                Latitude:
                <input type="text" value={location.lat} onChange={(e) => setLocation({ ...location, lat: e.target.value })} />
            </label>
            <label>
                Longitude:
                <input type="text" value={location.lng} onChange={(e) => setLocation({ ...location, lng: e.target.value })} />
            </label>
            <br />
            <button onClick={updateLocation}>Update Location</button>
            <br />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="available">Available</option>
                <option value="on-trip">On Trip</option>
            </select>
        </div>
    );
}

export default Driver;
