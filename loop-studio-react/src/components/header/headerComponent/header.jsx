import Navigation from '../navigation/navigation';
import {HeaderComponent, UpperDiv, ToggleContainer, LowerDiv, H1} from './header.styles';

import {ReactComponent as Logo} from '../../../assets/logo.svg';
import {ReactComponent as MenuToggle} from '../../../assets/icon-hamburger.svg';

function Header(){

    const toggleNavigation = () => {
        console.log('TODO TOGGLE NAV');
    }


    return(
        <HeaderComponent>
            <UpperDiv>
                <div id="logo-container">
                    <Logo />
                </div>
                <ToggleContainer onClick={toggleNavigation}>
                    <MenuToggle />
                </ToggleContainer>
                <Navigation />
            </UpperDiv>
            <LowerDiv>
                <H1>Immersive experiences that deliver</H1>
            </LowerDiv>
        </HeaderComponent>
    )
}

export default Header;