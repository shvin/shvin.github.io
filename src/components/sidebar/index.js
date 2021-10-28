import React from 'react';
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideButtonWrap,
    SidebarRoute
    } from './SidebarElements';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggleSidebar}>
            <Icon onClick={toggleSidebar}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggleSidebar}>
                        About
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggleSidebar}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggleSidebar}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideButtonWrap>
                    <SidebarRoute to="/signin">
                        Sign In
                    </SidebarRoute>
                </SideButtonWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
