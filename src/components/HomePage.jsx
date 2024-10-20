import React from 'react';
import '../styles/HomePage.css';
import bottleImage from '../assets/bottle.png';
import partnerImage from '../assets/partner.png';
import poolImage from '../assets/pool.png';
import saveImage from '../assets/save.png';
import Navbar from './Navbar'; // Import the Navbar component
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const HomePage = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to handle navigation on info box click
    const handleInfoBoxClick = (path) => {
        navigate(path); // Navigate to the specified path
    };

    return (
        <div className="homepage">
            <Navbar /> {/* Use the Navbar component */}
            <header className="homepage-header">
                <h1>DRINK IT! with us</h1>
                <p>Your go-to refill project for sustainable hydration!</p>
            </header>

            <div className="info-container">
                <div className="info-box" onClick={() => handleInfoBoxClick('/about')}>
                    <h2>About DRINK IT!</h2>
                    <img src={bottleImage} alt="A reusable bottle" className="info-image" />
                    <p>
                        DRINK IT! is committed to reducing plastic waste and promoting sustainable consumption through our innovative refill stations and futuristic water bottle.
                    </p>
                </div>
                <div className="info-box" onClick={() => handleInfoBoxClick('/how-it-works')}>
                    <h2>How It Works</h2>
                    <img src={partnerImage} alt="partner image" className="info-image" />
                    <p>
                        Simply bring your reusable bottle to one of our refill stations (partner restaurants, cafes, or bars), choose your drink, and refill it. It's that easy!
                    </p>
                </div>
                <div className="info-box" onClick={() => handleInfoBoxClick('/signup')}>
                    <h2>Join the Movement</h2>
                    <img src={poolImage} alt="movement" className="info-image" />
                    <p>
                        Sign up for exclusive offers, new refill station locations, and tips on how to lead a sustainable lifestyle. Let’s DRINK IT together!
                    </p>
                </div>
                <div className="info-box" onClick={() => handleInfoBoxClick('/sustainability')}>
                    <h2>Sustainability Commitment</h2>
                    <img src={saveImage} alt="save" className="info-image" />
                    <p>
                        We prioritize eco-friendly practices in our operations to ensure a cleaner planet for future generations.
                    </p>
                </div>
            </div>

            <footer>
                <p>&copy; 2024 DRINK IT! All rights reserved. By DRINK IT! CODE Berlin</p>
            </footer>
        </div>
    );
};

export default HomePage;
