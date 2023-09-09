import './AboutContentStyles.css'
import AboutMeEmbed from './AboutMeEmbed'

import React from 'react'
import { Link } from 'react-router-dom'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who I Am</h1>
            <p>I am a software enginner open to any positions.</p>
            <AboutMeEmbed className='video'/>
            <div className='con-btn'>
                <Link to='/contact' className='btn'>Contact</Link>
            </div>
        </div>
        <div className='right'></div>
    </div>
  )
}

export default AboutContent
