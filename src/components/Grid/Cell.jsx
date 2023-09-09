import React from 'react'
import PropTypes from 'prop-types'
import './Cell.css'

const Cell = props => {
  const {
    col,
    isFinish,
    isStart,
    isWall,
    onMouseDown,
    onMouseEnter,
    onMouseUp,
    row
  } = props

  const extraClassName = isFinish
    ? 'node-finish'
    : isStart
      ? 'node-start'
      : isWall
        ? 'node-wall'
        : ''

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}>
    </div>
  )
}

Cell.propTypes = {
  col: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  isFinish: PropTypes.bool.isRequired,
  isStart: PropTypes.bool.isRequired,
  isWall: PropTypes.bool.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseUp: PropTypes.func.isRequired
}

export default Cell
