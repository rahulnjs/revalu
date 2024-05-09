import styled from "styled-components"
import { device } from "../../util/style";

const navs = ['Materials', 'Elements', 'Projects', 'Manufacturers', 'Collections'];


const Header = () => {
    return <HeaderWrapper>
        <Logo>
            <img src="favico.png" />
        </Logo>
        <Nav>
            {navs.map((nav, i) => <NavItem key={nav} isActive={i === 4}>{nav}</NavItem>)}
        </Nav>
        <Avatar>
            <img src="avatar.jpg" />
        </Avatar>
    </HeaderWrapper>
}

export default Header;

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 12px;
    background-color: #fff;
    border-bottom: 1px solid #d9d9d7;
    align-items: center;
`;

const Logo = styled.div`
    width: max-content;

    img {
        width: 32px;
    }
`;

const Nav = styled.nav`
    display:flex;
    gap: 10px;

    @media ${device.mobile} {
        display: none;
    }

    @media ${device.laptop} {
        display: flex;
    }




`;

const Avatar = styled.div`
    width: max-content;

    img {
        width: 28px;
        border-radius: 50%;
    }
`;


const NavItem = styled.div < { isActive?: boolean }> `
    padding: 4px 8px;
    border-radius: 6px;
    font-size: .7rem;

    ${props => props.isActive ? `
        background-color: #ece6fa;
        color: #6b3dd7;
        
    `: ``}
`;