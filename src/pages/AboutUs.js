// src/pages/AboutUs.js
import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
    return (
        <div>
            <h2>About Us</h2>
            <p>Learn more about our team and mission.</p>
            <Link to="/ask-question">Begin by Asking a Question</Link>
            <br />
            <Link to="/">Go Back to Home</Link>
        </div>
    );
}

export default AboutUs;
