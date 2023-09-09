import React from 'react'
import PropTypes from 'prop-types'
import Cell from './Grid/Cell'

import './DijkstraPathStyles.css'

const DijkstraPath = props => {
  const {
    grid,
    mouseIsPressed,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp,
    visualizeDijkstra
  } = props

  return (
    <>
      <div className="grid">
        {grid.map((row, rowIdx) => {
          return (
            <div key={rowIdx}>
              {row.map((node, nodeIdx) => {
                const { row, col, isFinish, isStart, isWall } = node
                return (
                  <Cell
                    key={nodeIdx}
                    col={col}
                    isFinish={isFinish}
                    isStart={isStart}
                    isWall={isWall}
                    mouseIsPressed={mouseIsPressed}
                    onMouseDown={(row, col) => {
                      handleMouseDown(row, col)
                    }}
                    onMouseEnter={(row, col) => {
                      handleMouseEnter(row, col)
                    }}
                    onMouseUp={() => handleMouseUp()}
                    row={row}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
      <div className='vis-btn'>
        <button className='visualize' onClick={() => visualizeDijkstra()}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Visualize Dijkstra's Algorithm
        </button>
      </div>
      <div className='legend-and-instruction'>
        <div className='legend'>
          <h1 className='l-title'>
            Legend
          </h1>
        </div>
        <div className='instruction'>
          <h1>Instructions</h1>
          <p>Click and drag for walls.</p>
          <p>Click button to visualize path</p>
        </div>
      </div>
    </>
  )
}

DijkstraPath.propTypes = {
  grid: PropTypes.array.isRequired,
  mouseIsPressed: PropTypes.bool.isRequired,
  handleMouseDown: PropTypes.func.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseUp: PropTypes.func.isRequired,
  visualizeDijkstra: PropTypes.func.isRequired
}

export default DijkstraPath
