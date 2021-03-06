import {ReactComponent as Logo} from '../../../assets/logo.svg';

import {LeftDiv,LogoContainer, FooterUL, ListItem, NavLinkStyled} from './navigationComponent.styles';

function Navigation(){

    return(
        <LeftDiv>
            <LogoContainer>
                    <Logo />
            </LogoContainer>
            <div id="footer-nav">
                <FooterUL>
                    <ListItem><NavLinkStyled to={'/'}>About</NavLinkStyled></ListItem>
                    <ListItem><NavLinkStyled to={'/'}>Careers</NavLinkStyled></ListItem>
                    <ListItem><NavLinkStyled to={'/'}>Events</NavLinkStyled></ListItem>
                    <ListItem><NavLinkStyled to={'/'}>Products</NavLinkStyled></ListItem>
                    <ListItem><NavLinkStyled to={'/'}>Support</NavLinkStyled></ListItem>
                </FooterUL>
            </div>
        </LeftDiv>
    )
}

export default Navigation;