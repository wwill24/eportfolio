export function getGrid (width, height) {
  const grid = []

  for (let i = 0; i < height; ++i) {
    const local = []

    for (let j = 0; j < width; ++j) {
      local.push({
        x: j,
        y: i,
        isstart: false,
        istarget: false,
        weight: 1,
        iswall: false
      })
    }
    grid.push(local)
  }

  grid[Math.floor(height / 2)][Math.floor(width / 2)].isstart = true
  grid[height - 2][width - 2].istarget = true

  return grid
}
