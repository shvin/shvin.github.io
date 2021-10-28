import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

// for SidebarContainer
// opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
// top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    left: 0;
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    cursor: pointer;
    background: transparent;
    font-size: 2rem;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #3500D3;
        transition: 0.2s ease-in-out;
`;

export const SideButtonWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #3500D3;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 1.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.2s ease-in-out;
        background: #fff;
        color: #3500D3;
    }
`;
