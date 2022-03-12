import React from 'react';
import "./Hero.css";

const Hero = ({ImageSrc}) => {
  return (
    <div className='hero'>
        <img src={ImageSrc} alt="Travel" className='hero__image'/>
        <h1 className='hero__title'>Travel made simple.</h1>
    </div>
  )
}

export default Hero
