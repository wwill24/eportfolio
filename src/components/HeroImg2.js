import './HeroImg2Styles.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HeroImg2 extends Component {
  render () {
    return (
            <div className='hero-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
    )
  }
}

HeroImg2.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default HeroImg2
