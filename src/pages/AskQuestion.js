// src/pages/AskQuestion.js
import React from 'react';
import { Link } from 'react-router-dom';

function AskQuestion() {
    return (
        <div>
            <h2>Ask me an ethical question!</h2>
            <input type="text" placeholder="Enter Question" />
            <button>Generate Random Question</button>
            <div>
                <button>For</button>
                <button>Neutral</button>
                <button>Against</button>
            </div>
            <Link to="/results">Submit</Link>
            <br />
            <Link to="/">Go Back to Home</Link>
        </div>
    );
}

export default AskQuestion;
