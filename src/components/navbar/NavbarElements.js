import styled from 'styled-components'
import { Link as LinkRouter} from 'react-router-dom'
import { Link as LinkScroll} from 'react-scroll'


// margin-top: -80px; (for the navbar)

export const Nav = styled.nav`
    background: #171717;
    height: 70px;
    position: sticky;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavbarLogo = styled(LinkRouter)`
    justify-self: flex-start;
    cursor: pointer;
    dispaly: flex;
    align-items: center;
    margin-left: 12px;
    font-weight: bold;
    text-decoration: none;
    transition: 0.8s all ease;
    font-family: 'Gloria Hallelujah', cursive;
    font-weight: 700;
    font-style: italic;
    font-size: 2rem;
    color: #3500d3;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 12%;
        right: 3%;
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    padding-top: 20px;
`;

export const NavLink = styled(LinkScroll)`
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    margin-right: 22px;
    transition: 0.8s all ease;
    height: 100%;
    cursor: pointer;
    padding: 0 1 rem;

    &.active {
        border-bottom: 3px solid #3500D3;
    }
`
export const NavButton = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavButtonLink = styled(LinkRouter)`
    background: #0c32f2;
    border-radius: 50px;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 1.2rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.8s all ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: #2f0680;
        color: #fff;
    }
`;
