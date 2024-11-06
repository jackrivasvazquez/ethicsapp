// src/pages/AskQuestion.js
import React from 'react';
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

    &:hover {
        background-color: ${colors.secondary};
    }
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
    return (
        <Container>
            <h2>Ask me an ethical question!</h2>
            <input type="text" placeholder="Enter Question" style={{ margin: '10px 0', padding: '8px', width: '80%' }} />
            <Button>Generate Random Question</Button>
            <div>
                <Button>For</Button>
                <Button>Neutral</Button>
                <Button>Against</Button>
            </div>
            <Link to="/results" style={{ textDecoration: 'none', color: colors.primary, marginTop: '16px' }}>Submit</Link>
            <Link to="/" style={{ textDecoration: 'none', color: colors.primary, marginTop: '8px', display: 'block' }}>Go Back to Home</Link>
        </Container>
    );
}

export default AskQuestion;
