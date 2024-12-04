import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About'; 
import Profile from './components/Profile';
import Layout from './components/Layout'; 
import HowItWorks from './components/HowItWorks';
import BerlinMap from './components/BerlinMap';

const App = () => {
    return (
        <Router>
            <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} /> 
                <Route path="/profile" element={<Profile />} /> 
                <Route path="/how-it-works" element={<HowItWorks />} /> 
                 
            </Routes>
            </Layout>
        </Router>
    );
};

export default App;
