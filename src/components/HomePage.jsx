import React from 'react';
import '../styles/HomePage.css';
import Navbar from './Navbar'; 
import { useNavigate } from 'react-router-dom'; 

const HomePage = () => {
   // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate(); 
    

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
