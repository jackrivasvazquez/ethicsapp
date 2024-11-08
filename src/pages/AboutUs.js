// src/pages/AboutUs.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spacing } from '../theme';

// Import images with updated filenames
import haileyImage from '../assets/images/hailey.png';
import jackImage from '../assets/images/jack.png';
import mayaImage from '../assets/images/maya.png';

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

// Add padding-top to prevent overlap with fixed nav bar
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.background};
    padding: ${spacing.large};
    padding-top: calc(${spacing.large} + 50px);  // Add extra padding at the top to avoid overlap
    min-height: 100vh;
`;

const Title = styled.h2`
    font-size: 2em;
    color: ${colors.primary};
    margin-bottom: 40px;
`;

const ProfilesContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${spacing.large};
    width: 100%;
    max-width: 1200px;
`;

const ProfileCard = styled.div`
    width: 250px;
    text-align: center;
    padding: ${spacing.medium};
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: ${spacing.small};
`;

const ProfileName = styled.h3`
    font-size: 1.2em;
    color: ${colors.secondary};
    margin: ${spacing.small} 0;
`;

const ProfileInfo = styled.p`
    color: ${colors.secondary};
    margin: 0;
    font-size: 0.9em;
`;

const BackLink = styled(Link)`
    color: ${colors.primary};
    text-decoration: none;
    margin-top: ${spacing.large};
`;

const Button = styled.button`
    background-color: ${colors.primary};
    color: white;
    padding: 11px 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 40px;
    text-align: center; 
    display: inline-block;
    text-decoration: none; 
    &:hover {
        background-color: ${colors.secondary};
    }
`;

function AboutUs() {
    return (
        <Container>
            <NavBar>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/ask-question">Ask Questions</NavLink> 
                <NavLink to="/about-us">About Us</NavLink>
            </NavBar>
            
            <Title>Team Profile</Title>
            <ProfilesContainer>
                {/* Profile 1 */}
                <ProfileCard>
                    <ProfileImage src={haileyImage} alt="Hailey DeMark" />
                    <ProfileName>Hailey DeMark</ProfileName>
                    <ProfileInfo>Scottsdale, AZ</ProfileInfo>
                    <ProfileInfo>Majors: Computer Science, Creative Computing</ProfileInfo>
                    <ProfileInfo>Minor: Data Science</ProfileInfo>
                    <ProfileInfo>Fun Fact: I am a fitness instructor</ProfileInfo>
                </ProfileCard>
                
                {/* Profile 2 */}
                <ProfileCard>
                    <ProfileImage src={jackImage} alt="Jack Rivas-Vazquez" />
                    <ProfileName>Jack Rivas-Vazquez</ProfileName>
                    <ProfileInfo>Miami, FL</ProfileInfo>
                    <ProfileInfo>Majors: Computer Science + Data Science</ProfileInfo>
                    <ProfileInfo>Fun Fact: I like to play the guitar</ProfileInfo>
                </ProfileCard>
                
                {/* Profile 3 */}
                <ProfileCard>
                    <ProfileImage src={mayaImage} alt="Maya Siddiqui-Patel" />
                    <ProfileName>Maya Siddiqui-Patel</ProfileName>
                    <ProfileInfo>Toronto, ON</ProfileInfo>
                    <ProfileInfo>Major: Computer Science</ProfileInfo>
                    <ProfileInfo>Minor: Business</ProfileInfo>
                    <ProfileInfo>Fun Fact: I like video games</ProfileInfo>
                </ProfileCard>
            </ProfilesContainer>
            <Button as={Link} to="/ask-question">Begin by Asking a Question</Button>
        </Container>
    );
}

export default AboutUs;
