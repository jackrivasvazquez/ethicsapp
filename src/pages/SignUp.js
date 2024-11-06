// src/pages/SignUp.js
import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div>
            <h2>Create New Account</h2>
            <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
            <Link to="/login">Already Registered? Log in here.</Link>
            <br />
            <Link to="/">Go Back to Home</Link>
        </div>
    );
}

export default SignUp;
