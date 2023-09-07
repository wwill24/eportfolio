import React from 'react'

import DijkstraPath from '../components/DijkstraPath'
import DijkstraNavBar from '../components/DijkstraNavBar'
import PropTypes from "prop-types"

const DijkstraPathVisualizer = () => {
  function onClear () {
    window.alert("cleared")
  }
  return (
    <div className='dpv'>
        <DijkstraNavBar onClear={() => onClear()}/>
        <DijkstraPath></DijkstraPath>
    </div>
  )
}

DijkstraPathVisualizer.propTypes = {
  onClear: PropTypes.func.isRequired
}

export default DijkstraPathVisualizer