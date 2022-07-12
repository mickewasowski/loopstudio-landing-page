import {ReactComponent as Facebook} from '../../../assets/icon-facebook.svg'
import {ReactComponent as Twitter} from '../../../assets/icon-twitter.svg'
import {ReactComponent as Pinterest} from '../../../assets/icon-pinterest.svg'
import {ReactComponent as Instagram} from '../../../assets/icon-instagram.svg'

import {IconsContainer, NavLinkStyled} from './iconsComponent.styles';

function Icons(){
    return(
        <IconsContainer>
            <NavLinkStyled to={'/'}>
                <Facebook />
            </NavLinkStyled>
            <NavLinkStyled to={'/'}>
                <Twitter />
            </NavLinkStyled>
            <NavLinkStyled to={'/'}>
                <Pinterest />
            </NavLinkStyled>
            <NavLinkStyled to={'/'}>
                <Instagram />
            </NavLinkStyled>
        </IconsContainer>
    )
}

export default Icons;