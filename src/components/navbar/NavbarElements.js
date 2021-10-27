import styled from 'styled-components'
import { Link as LinkRouter} from 'react-router-dom'
// import { Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    margin-top: -80px;
    position: sticky;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    top: 0;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavbarLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    dispaly: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    transition: 0.8s all ease;
`