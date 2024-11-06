// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spacing } from '../theme';

const NavBarContainer = styled.div`
    width: 100%;
    background-color: ${colors.primary};
    color: white;
    padding: ${spacing.small} ${spacing.large};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 1000;
`;

const Title = styled.h1`
    font-size: 1.5em;
    margin: 0;
`;

const HamburgerMenu = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 4px;

    span {
        width: 25px;
        height: 3px;
        background-color: white;
    }
`;

const MenuContainer = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: white;
    color: ${colors.secondary};
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: ${spacing.medium};
`;

const MenuItem = styled(Link)`
    display: block;
    padding: ${spacing.small} 0;
    color: ${colors.secondary};
    text-decoration: none;
    font-size: 1em;

    &:hover {
        color: ${colors.primary};
    }
`;

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <NavBarContainer>
            <Title>App Title</Title>
            <HamburgerMenu onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerMenu>
            <MenuContainer isOpen={menuOpen}>
                <MenuItem to="/about-us">About Us</MenuItem>
                <MenuItem to="/ask-question">Ask Question</MenuItem>
                <MenuItem to="/results">Results</MenuItem>
                {/* Add more links as needed */}
            </MenuContainer>
        </NavBarContainer>
    );
}

export default Navbar;
