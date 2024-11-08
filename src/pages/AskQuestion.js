import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spacing } from '../theme';  // Import the theme

// Define the NavBar styled component
const NavBar = styled.div`
    width: 100%;
    padding: ${spacing.small};
    background-color: ${colors.primary};
    color: white;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    justify-content: flex-start;  // Align links to the left
    padding-left: 20px;  // Add left padding to the NavBar for spacing
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 16px;
    margin-right: 20px;  // Space links apart on the right side
    &:hover {
        text-decoration: underline;
    }
`;

// Define the Button styled component using the theme constants
const Button = styled.button`
    background-color: ${colors.primary};
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin: 5px;  // Add margin for spacing between buttons

    &:hover {
        background-color: ${colors.secondary};
    }
`;

// Styled link that looks like a button
const StyledLinkButton = styled(Link)`
    display: inline-block;
    background-color: ${colors.primary};
    color: white;
    padding: 8px 16px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 16px;
    margin-top: 16px;
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: ${colors.secondary};
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;  // Space between buttons
    margin-top: 16px;  // Space above the button container
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${colors.background};
    padding: ${spacing.large};
`;

function AskQuestion() {
    const [showButtons, setShowButtons] = useState(false);

    // Function to handle the question submission
    const handleSubmit = () => {
        setShowButtons(true);  // Show buttons after submission
    };

    return (
        <Container>
            <NavBar>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/ask-question">Ask Questions</NavLink> 
                <NavLink to="/about-us">About Us</NavLink>
            </NavBar>
            <h2>Ask AI an ethical question!</h2>
            <input 
                type="text" 
                placeholder="Enter Question" 
                style={{ margin: '10px 0', padding: '8px', width: '80%' }} 
            />
            <Button onClick={handleSubmit}>Generate Random Question</Button>
            
            {/* Conditionally render the ButtonContainer only if showButtons is true */}
            {showButtons && (
                <ButtonContainer>
                    <Button>For</Button>
                    <Button>Neutral</Button>
                    <Button>Against</Button>
                </ButtonContainer>
            )}
            
            <StyledLinkButton to="/results">Submit</StyledLinkButton>
        </Container>
    );
}

export default AskQuestion;
