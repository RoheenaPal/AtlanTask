import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const TrackingPage = ({ bookingId }) => {
    const [location, setLocation] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        const socket = socketIOClient();
        socket.on('locationUpdate', (data) => {
            if (data.bookingId === bookingId) {
                setLocation(data.location);
            }
        });
    }, [bookingId]);

    return (
        <div>
            {/* Render a map using location.lat and location.lng */}
        </div>
    );
};
