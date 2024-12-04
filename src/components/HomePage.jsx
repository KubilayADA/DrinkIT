import React from 'react';
import '../styles/HomePage.css';
import Navbar from './Navbar';

const HomePage = () => {
    return (
        <div className="homepage">
            {/* Navigation Bar */}
            <Navbar />

            {/* Header Section */}
            <header className="homepage-header">
                <img src="src/assets/logo.png" alt="Drink It logo" className="navbar-logo" />
            </header>

            {/* Footer Section */}
            <footer className="homepage-footer">
                <p>&copy; 2024 DRINK IT! All rights reserved. By DRINK IT! CODE Berlin</p>
            </footer>
        </div>
    );
};

export default HomePage;
git 