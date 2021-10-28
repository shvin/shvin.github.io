import React from 'react'
import Video from '../../videos/video.mp4'
import { 
    HeroContainer,
    HeroBackground,
    VideoBackground
    } from './HeroElements'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBackground>
        </HeroContainer>
    )
}

export default HeroSection