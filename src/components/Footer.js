import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './FooterStyles.css'

import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }}/>
                    <div>
                       <p>55 Del Cambrea</p>
                       <p>Irvine, CA 92606</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }}/>(949) 285-6982</h4>

                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }}/>williamjunw@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>Software engineer. Computer Science major at UCLA. Currently third year student.</p>
                <div className='social'>
                    <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} onClick={() => window.open('https://linkedin.com/in/william-wu-677516201')}/>
                    <FaTwitter size={30} style={{ color: '#fff', marginRight: '1rem' }} onClick={() => window.open('https://twitter.com/willjw22')}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
