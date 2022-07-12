import Navigation from '../navigation/navigationComponent';
import Copyright from '../copyrightComponent/copyright';
import {FooterContainer} from './footer.styles';

function Footer(){

    return(
        <FooterContainer>
            <Navigation />
            <Copyright />
        </FooterContainer>
    )
}

export default Footer;