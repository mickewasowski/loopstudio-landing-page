import {ReactComponent as Logo} from '../../../assets/logo.svg';
import {ReactComponent as MenuToggle} from '../../../assets/icon-hamburger.svg';

import {NavigationContainer, NavUL, ListItem, NavLinkStyled, MobileContainer} from './navigation.styles';

function Navigation(){

    const toggleMenu = () => {
        console.log('TODO TOGGLE MENU');
    }

    return(
        <NavigationContainer>
            <MobileContainer>
                <Logo />
                <span onClick={toggleMenu}>
                    <MenuToggle />
                </span>
            </MobileContainer>
            <nav id="nav-tag">
                <NavUL>
                <ListItem><NavLinkStyled to='/'>About</NavLinkStyled></ListItem>
                <ListItem><NavLinkStyled to='/'>Careers</NavLinkStyled></ListItem>
                <ListItem><NavLinkStyled to='/'>Events</NavLinkStyled></ListItem>
                <ListItem><NavLinkStyled to='/'>Products</NavLinkStyled></ListItem>
                <ListItem><NavLinkStyled to='/'>Support</NavLinkStyled></ListItem>
                </NavUL>
            </nav>
        </NavigationContainer>
    )
}

export default Navigation;