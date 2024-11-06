// src/pages/AboutUs.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spacing } from '../theme';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${colors.background};
    padding: ${spacing.large};
`;

const Card = styled.div`
    width: 350px;
    padding: ${spacing.large};
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    text-align: center;
`;

const Button = styled.button`
    background-color: ${colors.primary};
    color: white;
    padding: ${spacing.medium};
    width: 100%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: ${spacing.medium};

    &:hover {
        background-color: ${colors.secondary};
    }
`;

function AboutUs() {
    return (
        <Container>
            <Card>
                <h2>About Us</h2>
                <p>Learn more about our team and mission.</p>
                <Button as={Link} to="/ask-question">Begin by Asking a Question</Button>
                <Link to="/" style={{ color: colors.primary, textDecoration: 'none', marginTop: spacing.small, display: 'block' }}>
                    Go Back to Home
                </Link>
            </Card>
        </Container>
    );
}

export default AboutUs;
