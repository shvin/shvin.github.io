import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
    Nav,
    NavbarContainer,
    NavbarLogo,
    MobileIcon,
    NavMenu, NavItem,
    NavLink
    } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavbarLogo to="/">ASHVIN</NavbarLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="about">
                                about
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="projects">
                                projects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="contact">
                                contact
                            </NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
