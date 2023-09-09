import React from 'react'

import DijkstraPath from '../../components/DijkstraPath'
import DijkstraNavBar from '../../components/DijkstraNavBar'
import { dijkstra, getNodesInShortestPathOrder } from '../../algorithms/Dijkstra'
// methods
import componentDidMount from './methods/componentDidMount'
import handleMouseDown from './methods/handleMouseDown'
import handleMouseEnter from './methods/handleMouseEnter'

const START_NODE_ROW = 10
const START_NODE_COL = 10
const FINISH_NODE_ROW = 10
const FINISH_NODE_COL = 40

// const DijkstraPathVisualizer = () => {
//   function onClear () {
//     window.alert("cleared")
//   }
//   return (
//   )
// }

class DijkstraPathVisualizer extends React.Component {
  constructor () {
    super()
    this.state = {
      grid: [],
      mouseIsPressed: false
    }
    this.componentDidMount = componentDidMount.bind(this)
    this.handleMouseDown = handleMouseDown.bind(this)
    this.handleMouseEnter = handleMouseEnter.bind(this)
  }

  handleMouseUp () {
    this.setState({ mouseIsPressed: false })
  }

  animateDijkstra (visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= this.visitedNodesInOrder.length; i++) {
      if (i === this.visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder)
        }, 10 * i)
        return
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i]
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-visited'
      }, 10 * i)
    }
  }

  animateShortestPath (nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i]
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-shortest-path'
      }, 50 * i)
    }
  }

  visualizeDijkstra () {
    const { grid } = this.state
    const startNode = grid[START_NODE_ROW][START_NODE_COL]
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL]
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode)
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode)
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder)
  }

  getInitialGrid = () => {
    const grid = []

    for (let row = 0; row < 25; ++row) {
      const currRow = []
      for (let col = 0; col < 50; ++col) {
        currRow.push(this.createNode(col, row))
      }
      grid.push(currRow)
    }
    return grid
  }

  createNode = (col, row) => {
    return {
      col,
      row,
      isStart: row === START_NODE_ROW && col === START_NODE_COL,
      isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null
    }
  }

  getNewGridWithToggledWall = (grid, row, col) => {
    const newGrid = grid.slice()
    const node = newGrid[row][col]
    const newNode = {
      ...node,
      isWall: !node.isWall
    }
    newGrid[row][col] = newNode
    return newGrid
  }

  clearBoard () {
    const grid = this.getInitialGrid()
    this.setState({ grid })
  }

  clearWalls = () => {

  }

  clearPath = () => {

  }

  render () {
    const { grid, mouseIsPressed } = this.state
    return (
      <div className='dpv'>
        <DijkstraNavBar
          onClearBoard={() => this.clearBoard()}
          onClearWalls={() => this.clearWalls()}
          onClearPath={() => this.clearPath()}
        />
        <DijkstraPath
          grid={grid}
          mouseIsPressed={mouseIsPressed}
          handleMouseDown={(row, col) => this.handleMouseDown(row, col)}
          handleMouseEnter={(row, col) => this.handleMouseEnter(row, col)}
          handleMouseUp={() => this.handleMouseUp()}
          visualizeDijkstra={() => this.visualizeDijkstra()}
        />
      </div>
    )
  }
}

export default DijkstraPathVisualizer
