import React from 'react';
import '../styles/HomePage.css';
import Navbar from './Navbar'; 
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import BerlinMap from './BerlinMap';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is imported

const HomePage = () => {
   // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate(); 
    

    return (
        <div className="homepage">
            <Navbar />
            <header className="homepage-header">
            <img src={logo} alt="Drink It logo" className="navbar-logo" /> {/* Use the imported logo */}
            </header>
             <div className="map-container">
                <BerlinMap />
            </div>

            <footer>
                <p>&copy; 2024 DRINK IT! All rights reserved. By DRINK IT! CODE Berlin</p>
            </footer>
        </div>
        
    );
};

export default HomePage;
