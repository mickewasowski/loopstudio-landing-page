import { useState } from 'react';
import {CreationsContainer, HeadingsContainer,H2,SeeAllBtn,CreationsElements,CreationItem,Backdrop,CreationItemHeading, MobileBtn} from './creationsComponent.styles';

function Creations(){
    const [backdropStyles, setBackdropStyles] = useState({});

    const handleMouseEnter = (e) => {
        let backdrop = Array.from(e.target.children)[0];
        
        if (backdrop.style.display === '') {
            backdrop.style.display = 'block';
        }
    }

    const handleMouseLeave = (e) => {
        let backdrop = e.target;

        if(backdrop.style.display === 'block'){
            backdrop.style.display = '';
        }
    }

    return(
        <CreationsContainer>
            <HeadingsContainer>
                <H2>Our creations</H2>
                <SeeAllBtn>See all</SeeAllBtn>
            </HeadingsContainer>
            <CreationsElements>
                <CreationItem 
                        style={{backgroundImage: "url(./images/desktop/image-deep-earth.jpg)"}} 
                        onMouseLeave={handleMouseLeave} 
                        onMouseEnter={handleMouseEnter}
                    >
                    <Backdrop></Backdrop>
                    <CreationItemHeading>Deep earth</CreationItemHeading>
                </CreationItem>
                <CreationItem 
                        style={{backgroundImage: "url(./images/desktop/image-night-arcade.jpg)"}} 
                        onMouseLeave={handleMouseLeave}  
                        onMouseEnter={handleMouseEnter}
                    >
                    <Backdrop></Backdrop>
                    <CreationItemHeading>Night arcade</CreationItemHeading>
                </CreationItem>
                <CreationItem 
                        style={{backgroundImage: "url(./images/desktop/image-soccer-team.jpg)"}} 
                        onMouseLeave={handleMouseLeave}  
                        onMouseEnter={handleMouseEnter}
                    >
                    <Backdrop></Backdrop>
                    <CreationItemHeading>Soccer team VR</CreationItemHeading>
                </CreationItem>
                <CreationItem 
                        style={{backgroundImage: "url(./images/desktop/image-grid.jpg)"}} 
                        onMouseLeave={handleMouseLeave}  
                        onMouseEnter={handleMouseEnter}
                    >
                    <Backdrop></Backdrop>
                    <CreationItemHeading>The grid</CreationItemHeading>
                </CreationItem>
                <CreationItem 
                        style={{backgroundImage: "url(./images/desktop/image-from-above.jpg)"}} 
                        onMouseLeave={handleMouseLeave}  
                        onMouseEnter={handleMouseEnter}
                    >
                    <Backdrop></Backdrop>
                    <CreationItemHeading>From up above VR</CreationItemHeading>
                </CreationItem>
                <CreationItem 
                        style={{backgroundImage: "url(./images/desktop/image-pocket-borealis.jpg)"}} 
                        onMouseLeave={handleMouseLeave}  
                        onMouseEnter={handleMouseEnter}
                    >
                    <Backdrop></Backdrop>
                    <CreationItemHeading>Pocket borealis</CreationItemHeading>
                </CreationItem>
                <CreationItem 
                        style={{backgroundImage: "url(./images/desktop/image-curiosity.jpg)"}} 
                        onMouseLeave={handleMouseLeave}  
                        onMouseEnter={handleMouseEnter}
                    >
                    <Backdrop></Backdrop>
                    <CreationItemHeading>The curiosity</CreationItemHeading>
                </CreationItem>
                <CreationItem 
                        style={{backgroundImage: "url(./images/desktop/image-fisheye.jpg)"}} 
                        onMouseLeave={handleMouseLeave}  
                        onMouseEnter={handleMouseEnter}
                    >
                    <Backdrop></Backdrop>
                    <CreationItemHeading>Make it fisheye</CreationItemHeading>
                </CreationItem>
            </CreationsElements>
            <MobileBtn>See all</MobileBtn>
        </CreationsContainer>
    )
}

export default Creations;