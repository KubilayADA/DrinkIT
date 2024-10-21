import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5001/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            
if (response.ok) {
    const { token, user } = data; 
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user)); 
    console.log("LOGGED IN");
    navigate('/');
    

}
else {
                setMessage(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            setMessage('Error: Unable to connect to the server.');
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="submit-button">Login</button>
            </form>
            {message && <p className="message">{message}</p>}
            <footer className="footer">
                <p>&copy; 2024 DRINK IT! All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Login;
