// src/components/Layout.js

import React from 'react';
import Navbar from './Navbar'; // Adjust the path as needed


const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="main-content">{children}</main>
        </>
    );
};

export default Layout;
