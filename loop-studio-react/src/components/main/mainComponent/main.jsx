import Description from "../description/descriptionComponent";
import Creations from "../creations/creationsComponent";

import {Main as MainContainer} from './main.styles';

function Main(){

    return(
        <MainContainer>
            <Description />
            <Creations />
        </MainContainer>
    )
}

export default Main;