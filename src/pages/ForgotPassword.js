// src/pages/ForgotPassword.js
import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    return (
        <div>
            <h2>Forgot Password</h2>
            <form>
                <input type="email" placeholder="Enter email" />
                <button type="submit">Submit</button>
            </form>
            <Link to="/login">Back to log in? Click here</Link>
            <br />
            <Link to="/">Go Back to Home</Link>
        </div>
    );
}

export default ForgotPassword;
