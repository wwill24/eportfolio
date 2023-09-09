import React, { Component } from 'react'
import props from 'prop-types'
import './Cell.css'

export default class Cell extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
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
}
