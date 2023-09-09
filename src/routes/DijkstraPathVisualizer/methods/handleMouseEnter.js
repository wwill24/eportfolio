function handleMouseEnter (row, col) {
  const { mouseIsPressed, grid } = this.state
  if (!mouseIsPressed) return

  const newGrid = this.getNewGridWithToggledWall(grid, row, col)
  this.setState({ grid: newGrid })
}

export default handleMouseEnter
