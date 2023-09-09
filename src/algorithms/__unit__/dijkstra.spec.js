import dijkstra from '../dijkstra'
import mockGrid from '../__mocks__/grid.json'
import mockStartNode from '../__mocks__/startNode.json'
import mockFinishNode from '../__mocks__/finishNode.json'

describe('dijkstra', () => {
  it('calculates start node distance', () => {
    expect(dijkstra(mockGrid, mockStartNode, mockFinishNode)).toEqual([])
  })
})
