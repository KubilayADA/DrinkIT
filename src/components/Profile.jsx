import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [user, setUser] = useState({ name: '', email: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // Fetch user profile on component mount
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/login'); // Redirect to login if no token
                    return;
                }

                const response = await fetch('http://localhost:5001/api/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser(data.user); // Ensure this is set properly
                } else {
                    setMessage('Error fetching user profile.');
                    if (response.status === 401) {
                        localStorage.removeItem('token'); // Clear token if unauthorized
                        navigate('/login'); // Redirect to login page
                    }
                }
            } catch (error) {
                setMessage('Error: Unable to connect to the server.');
            }
        };

        fetchUserProfile();
    }, [navigate]); // Include navigate in the dependency array

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5001/api/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                setMessage('Profile updated successfully!');
                setIsEditing(false);
            } else {
                setMessage('Error updating profile.');
            }
        } catch (error) {
            setMessage('Error: Unable to connect to the server.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="profile-container">
            <h1 className="profile-title">User Profile</h1>
            {message && <p className="message">{message}</p>}
            <div>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    className="input-field"
                    placeholder="Full Name"
                    value={user.name}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    required
                />
                <input
                    type="email"
                    name="email"
                    className="input-field"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    required
                />
                {isEditing ? (
                    <button type="submit" className="submit-button">Save Changes</button>
                ) : (
                    <button type="button" className="edit-button" onClick={handleEdit}>Edit Profile</button>
                )}
                <button type="button" className="logout-button" onClick={handleLogout}>Logout</button>
            </form>
        </div>
    );
};

export default Profile;
