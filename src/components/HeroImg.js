import './HeroImgStyles.css'

import React from 'react'

import IntroImg from '../assets/eportfolio home page.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt = 'IntroImg'/>
        </div>
        <div className='content'>
            <p>WILLIAM WU</p>
            <h1>Software Engineer</h1>
            <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
