function animateDijkstra (visitedNodesInOrder, nodesInShortestPathOrder) {
  for (let i = 0; i <= visitedNodesInOrder.length; i++) {
    if (i === visitedNodesInOrder.length) {
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

export default animateDijkstra
