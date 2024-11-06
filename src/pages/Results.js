// src/pages/Results.js
import React from 'react';
import { Link } from 'react-router-dom';

function Results() {
    return (
        <div>
            <h2>Results</h2>
            <p>Generated Response Here</p>
            <Link to="/ask-question">Ask Another Question</Link>
            <br />
            <Link to="/">Go Back to Home</Link>
        </div>
    );
}

export default Results;
