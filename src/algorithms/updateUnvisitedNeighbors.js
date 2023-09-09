import getUnvisitedNeighbors from './getUnvisitedNeighbors'

export default function updateUnvisitedNeighbors (node, grid) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid)
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1
    neighbor.previousNode = node
  }
}
