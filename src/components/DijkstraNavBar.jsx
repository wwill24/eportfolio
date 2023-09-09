import React from 'react'
import PropTypes from 'prop-types'
import './DijkstraNavBar.css'

const DijkstraNavBar = props => {
  const { clearBoard, clearPath, clearWalls } = props
  return (
    <div className='path-navbar'>
      <h1>Dijkstra</h1>
      <div className='btns'>
          <button
            className='clearBoard'
            onClick={() => clearBoard()}
          >
            Clear Board
          </button>
          <button
            className='clearWalls'
            onClick={() => clearWalls()}
          >
              Clear Walls
          </button>
          <button
            className='clearPath'
            onClick={() => clearPath()}
          >
              Clear Path
          </button>
      </div>
    </div>
  )
}

DijkstraNavBar.propTypes = {
  clearBoard: PropTypes.func.isRequired,
  clearPath: PropTypes.func.isRequired,
  clearWalls: PropTypes.func.isRequired
}

export default DijkstraNavBar
