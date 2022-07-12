import { DescriptionContainer, VRGoggles, DescriptionDiv, H2, StyledParag} from './desctiptionComponent.styles';

function Description(){

    return(
        <DescriptionContainer>
            <VRGoggles />
            <DescriptionDiv>
                <H2>The leader in interactive VR</H2>
                <StyledParag>Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.</StyledParag>
            </DescriptionDiv>
        </DescriptionContainer>
    )
}

export default Description;