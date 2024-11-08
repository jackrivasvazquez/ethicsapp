// src/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import AboutUs from './pages/AboutUs';
import AskQuestion from './pages/AskQuestion';
import Results from './pages/Results';

const isAuthenticated = false; // Replace this with your actual auth logic

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/signup" element={<SignUp />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/ask-question" element={<AskQuestion />} />
            <Route path="/results" element={<Results />} />
            
        </Routes>
    );
};

export default AppRoutes;
