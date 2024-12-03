import React from 'react';
import '../styles/HomePage.css';
import bottleImage from '../assets/bottle.png';
import partnerImage from '../assets/partner.png';
import poolImage from '../assets/pool.png';
import saveImage from '../assets/save.png';
import Navbar from './Navbar'; 
import { useNavigate } from 'react-router-dom'; 
import '../assets/home.png';


const HomePage = () => {
    const navigate = useNavigate(); 
    
    const handleInfoBoxClick = (path) => {
        navigate(path); 
    };

    return (
        <div className="homepage">
            <Navbar />
            <header className="homepage-header">
                <img src="src/assets/logo.png" alt="Drink It logo" className="navbar-logo" />
                
            </header>

           

            <footer>
                <p>&copy; 2024 DRINK IT! All rights reserved. By DRINK IT! CODE Berlin</p>
            </footer>
        </div>
    );
};


export default HomePage;
