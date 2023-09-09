function handleMouseDown (row, col) {
  const { grid } = this.state
  const newGrid = this.getNewGridWithToggledWall(grid, row, col)

  this.setState({ grid: newGrid, mouseIsPressed: true })
}

export default handleMouseDown
