import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spacing } from '../theme';  // Import the theme

// Define the Button styled component using the theme constants
const Button = styled.button`
    background-color: ${colors.primary};
    color: white;
    padding: ${spacing.medium};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin: 5px;  // Add margin for spacing between buttons

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
            <h2>Ask me an ethical question!</h2>
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
            
            <Link to="/results" style={{ textDecoration: 'none', color: colors.primary, marginTop: '16px' }}>Submit</Link>
            <Link to="/" style={{ textDecoration: 'none', color: colors.primary, marginTop: '8px', display: 'block' }}>Go Back to Home</Link>
        </Container>
    );
}

export default AskQuestion;
