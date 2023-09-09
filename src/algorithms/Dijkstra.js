import getAllNodes from './getAllNodes'
import sortNodesByDistance from './sortNodesByDistance'
import updateUnvisitedNeighbors from './updateUnvisitedNeighbors'

export default function dijkstra (grid, startNode, finishNode) {
  const visitedNodesInOrder = []
  startNode.distance = 0
  const unvisitedNodes = getAllNodes(grid)
  while (!unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes)
    const closestNode = unvisitedNodes.shift()
    // If we encounter a wall, we skip it.
    if (closestNode.isWall) continue
    // If the closest node is at a distance of infinity,
    // we must be trapped and should therefore stop.
    if (closestNode.distance === Infinity) return visitedNodesInOrder
    closestNode.isVisited = true
    visitedNodesInOrder.push(closestNode)
    if (closestNode === finishNode) return visitedNodesInOrder
    updateUnvisitedNeighbors(closestNode, grid)
  }
  return visitedNodesInOrder
}
