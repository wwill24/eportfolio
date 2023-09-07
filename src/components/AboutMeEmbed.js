import './AboutMeEmbedStyles.css'

import React from 'react'
import SelfImg from "../assets/uclaphoto.jpg"

const AboutMeEmbed = () => {
  return (
    <div className='my-img'>
        <img className='me' src={SelfImg} alt='SelfImg'/>
    </div>
  )
}

export default AboutMeEmbed