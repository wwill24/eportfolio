import React from 'react'
import PropTypes from 'prop-types'
import './DijkstraNavBar.css'

const DijkstraNavBar = props => {
  const {
    onClearBoard,
    onClearPath,
    onClearWalls
  } = props

  return (
    <div className='path-navbar'>
      <h1>Dijkstra</h1>
      <div className='btns'>
        <button
          className='clearBoard'
          onClick={() => onClearBoard()}
        >
          Clear Board
        </button>
        <button
          className='clearWalls'
          onClick={() => onClearWalls()}
        >
            Clear Walls
        </button>
        <button
          className='clearPath'
          onClick={() => onClearPath()}
        >
            Clear Path
        </button>
      </div>
    </div>
  )
}

DijkstraNavBar.propTypes = {
  onClearBoard: PropTypes.func.isRequired,
  onClearPath: PropTypes.func.isRequired,
  onClearWalls: PropTypes.func.isRequired
}

export default DijkstraNavBar
