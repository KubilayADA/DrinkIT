import React from 'react';
import '../styles/About.css'; 
const About = () => {
    return (
        <div className="about-us-container">
            <h2>About Us</h2>
            <p>
                We are a group of five friends and students from CODE Berlin: Ada, Sherry, Nico, Juan, and Santiago. 
                Our mission is simple yet impactful: to make water accessible for everyone, completely free of charge.
            </p>
            <p>
                We believe in the power of community and collaboration. That's why we're dedicated to connecting small 
                businesses and individuals by launching water refill stations at local businesses. 
            </p>
            <p>
                Our goal is to create a network of refill stations where everyone can access clean drinking water 
                while supporting local businesses. Together, we can foster a sustainable future and ensure that water 
                is a right, not a privilege.
            </p>
            <h3>Meet the Team</h3>
            <ul className="team-list">
                <li>Ada</li>
                <li>Sherry</li>
                <li>Nico</li>
                <li>Juan</li>
                <li>Santiago</li>
            </ul>
            <p>Join us in our journey to make water accessible for all!</p>
        </div>
    );
};

export default About;
