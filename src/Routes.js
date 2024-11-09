// src/Routes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AskQuestion from './pages/AskQuestion';
import AboutUs from './pages/AboutUs';
import { useAuth } from './AuthContext';  // Import useAuth to check authentication

// ProtectedRoute component to handle restricted access
const ProtectedRoute = ({ isLoggedIn, children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
    const { isLoggedIn } = useAuth();  // Get login status from AuthContext

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/ask-question"
                element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <AskQuestion />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/about-us"
                element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <AboutUs />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
