import {ReactComponent as CloseMenuToggle} from '../../../assets/icon-close.svg';

import {NavigationContainer, NavUL, ListItem, NavLinkStyled, MobileContainer, MobileLogo, NavTag, CloseMenuContainer} from './navigation.styles';

function Navigation({state, toggle}){

    const isMobile = window.innerWidth < 1024;

    return(
        <NavigationContainer style={(isMobile && state) ? {display: 'flex'} : {}}>
            <MobileContainer style={state ? {display: 'flex'} : {}}>
                <MobileLogo />
                <CloseMenuContainer onClick={toggle}>
                    <CloseMenuToggle />
                </CloseMenuContainer>
            </MobileContainer>
            <NavTag style={state ? {display: 'flex'} : {}}>
                <NavUL>
                    <ListItem><NavLinkStyled to='/'>About</NavLinkStyled></ListItem>
                    <ListItem><NavLinkStyled to='/'>Careers</NavLinkStyled></ListItem>
                    <ListItem><NavLinkStyled to='/'>Events</NavLinkStyled></ListItem>
                    <ListItem><NavLinkStyled to='/'>Products</NavLinkStyled></ListItem>
                    <ListItem><NavLinkStyled to='/'>Support</NavLinkStyled></ListItem>
                </NavUL>
            </NavTag>
        </NavigationContainer>
    )
}

export default Navigation;