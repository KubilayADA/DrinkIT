import React, { useState } from 'react';
import '../styles/Signup.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [address, setAddress] = useState(''); // Fix typo from 'adress' to 'address'
    const [birthday, setBirthday] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5001/api/signup', { // Use your backend URL
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Signup successful! You can now log in.');
                // Redirect to the login page
                navigate('/login');
            } else {
                setMessage(data.message || 'Signup failed. Please try again.');
            }
        } catch (error) {
            setMessage('Error: Unable to connect to the server.');
        }
    };

    return (
        <div className="signup-container">
            <h1 className="signup-title">Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input-field"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    className="input-field"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="input-field"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="text"
                    className="input-field"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <input
                    type="date"
                    className="input-field"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                />
                <button type="submit" className="submit-button">Sign Up</button>
            </form>
            {message && <p className="message">{message}</p>}
            <footer className="footer">
                <p>&copy; 2024 DRINK IT! All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Signup;
