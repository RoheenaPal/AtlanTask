// frontend/src/components/Tracking.js
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

function Tracking() {
    const [location, setLocation] = useState({ lat: '', lng: '' });

    useEffect(() => {
        socket.on('locationUpdate', (data) => {
            setLocation(data);
        });

        return () => {
            socket.off('locationUpdate');
        };
    }, []);

    return (
        <div>
            <h2>Tracking Driver</h2>
            <div>
                <strong>Current Location:</strong> Latitude: {location.lat}, Longitude: {location.lng}
            </div>
        </div>
    );
}

export default Tracking;
