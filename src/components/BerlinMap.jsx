import React, { useEffect, useRef } from 'react';
import L from 'leaflet'; // Assuming you're using Leaflet
import '../styles/BerlinMap.css'; // Import the CSS file for styling
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is imported


const BerlinMap = () => {
    const mapContainerRef = useRef(null);  // Reference to map container

    useEffect(() => {
        let map; // Declare map variable
        if (mapContainerRef.current && !mapContainerRef.current._leaflet_id) {
            map = L.map(mapContainerRef.current).setView([52.52, 13.4050], 13);  // Initialize map
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);
    
            // Ensure the map resizes correctly when the layout changes
            map.invalidateSize();
        }
    
        return () => {
            if (map) {
                map.remove(); // Cleanup map instance
            }
        };
    }, []);
    

    return <div ref={mapContainerRef} className="map-container" style={{ height: '100%', width: '100%' }}></div>;
};

export default BerlinMap;
