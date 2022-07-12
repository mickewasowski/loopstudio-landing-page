import Icons from '../icons/iconsComponent';

import {RightDiv, CopyrightContainer} from './copyright.styles';

function Copyright(){

    return(
        <RightDiv>
            <Icons />
            <CopyrightContainer>
                <p>© 2021 Loopstudios. All rights reserved.</p>
            </CopyrightContainer>
        </RightDiv>
    )
}

export default Copyright;