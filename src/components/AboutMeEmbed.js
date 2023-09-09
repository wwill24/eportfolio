import './AboutMeEmbedStyles.css'

import React from 'react'
import SelfImg from '../assets/uclaphoto.jpg'

const AboutMeEmbed = () => {
  return (
    <div className='my-img'>
      <img className='me' src={SelfImg} alt='SelfImg'/>
      <div>
        <p className='desc'>I am a third year student currently at University of California, Los Angeles. I am majoring in Computer Science with an emphasis in Software Engineering. </p>
      </div>
    </div>
  )
}

export default AboutMeEmbed
