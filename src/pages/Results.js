import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spacing } from '../theme';

// Define the NavBar styled component
const NavBar = styled.div`
    width: 100%;
    padding: ${spacing.small};
    background-color: ${colors.primary};
    color: white;
    display: flex;
    position: fixed;  // Fix the navbar at the top
    top: 0;
    left: 0;
    z-index: 1000;  // Ensure it stays on top of other elements
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 16px;
    margin-left: 20px;
    &:hover {
        text-decoration: underline;
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

const Card = styled.div`
    width: 350px;
    padding: ${spacing.large};
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    text-align: center;
    min-height: 200px;

`;

const Title = styled.h2`
    margin-bottom: ${spacing.medium};
`;

const Text = styled.p`
    margin-bottom: ${spacing.large};  // Adds space below the response text
`;

const Button = styled.button`
    background-color: ${colors.primary};
    color: white;
    padding: 11px 18px;
    width: 100%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 16px;
    margin-top: ${spacing.medium};
    

    &:hover {
        background-color: ${colors.secondary};
    }
`;

function Results() {
    return (
        <Container>
            <NavBar>
                <NavLink to="/">Home</NavLink>
            </NavBar>

            <Card>
                <Title>Results</Title>
                <Text>Generated Response Here</Text>
                <Button as={Link} to="/ask-question">Ask Another Question</Button>
            </Card>
        </Container>
    );
}

export default Results;
