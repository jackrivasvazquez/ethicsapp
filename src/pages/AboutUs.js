// src/pages/AboutUs.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spacing } from '../theme';

// Import images with updated filenames
import haileyImage from '../assets/images/hailey.png';
import jackImage from '../assets/images/jack.png';
import mayaImage from '../assets/images/maya.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.background};
    padding: ${spacing.large};
    min-height: 100vh;
`;

const Title = styled.h2`
    font-size: 2em;
    color: ${colors.primary};
    margin-bottom: ${spacing.large};
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
    padding: ${spacing.medium};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: ${spacing.large};
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
            <BackLink to="/">Go Back to Home</BackLink>
        </Container>
    );
}

export default AboutUs;
