import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Navbar.css'; // Adjust this path based on your folder structure
import '../assets/logo.png';

const Navbar = () => {
    const isLoggedIn = !!localStorage.getItem('token'); // Check if the user is logged in

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token
        // Redirect to the login page without full page reload
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                {/* Replace <h2> with an <img> tag for home.png */}
                <img src="src/assets/logo.png" alt="Drink It logo" className="navbar-logo" />

            </div>
            <div className="navbar-links">
                {/* Home button is always visible */}
                <Link to="/" className="navbar-button home-button">Home</Link>

                {isLoggedIn ? (
                    <>
                        <Link to="/profile" className="navbar-button profile-button">Profile</Link>
                        <button className="navbar-button logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/signup" className="navbar-button join-button">JOIN NOW</Link>
                        <Link to="/login" className="navbar-button login-button">LOGIN</Link>
                    </>
                )}
                
                {/* About Us button is always visible */}
                <Link to="/about" className="navbar-button about-button">About Us</Link>
            </div>
        </nav>
    );
};

export default Navbar;
