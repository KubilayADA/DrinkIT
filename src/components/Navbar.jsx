import React from 'react';
import '../styles/Navbar.css'; // Adjust this path based on your folder structure

const Navbar = () => {
    const isLoggedIn = !!localStorage.getItem('token'); // Check if the user is logged in

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token
        window.location.href = '/login'; // Redirect to the login page
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h2>DRINK IT!</h2> {/* Brand Name */}
            </div>
            <div className="navbar-links">
                {/* Home button is always visible */}
                <button className="navbar-button home-button" onClick={() => window.location.href = '/'}>
                    Home
                </button>

                {isLoggedIn ? (
                    <>
                        <button className="navbar-button profile-button" onClick={() => window.location.href = '/profile'}>
                            Profile
                        </button>
                        <button className="navbar-button logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <button className="navbar-button join-button" onClick={() => window.location.href = '/signup'}>
                            JOIN NOW
                        </button>
                        <button className="navbar-button login-button" onClick={() => window.location.href = '/login'}>
                            LOGIN
                        </button>
                    </>
                )}
                
                {/* About Us button is always visible */}
                <button className="navbar-button about-button" onClick={() => window.location.href = '/about'}>
                    About Us
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
