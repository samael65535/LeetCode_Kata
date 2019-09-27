/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	let row = grid.length
	if(row == 0) return 0
	let col = grid[0].length
	let traverse = (grid, x, y) => {
		// 广度优先？
		if(x < 0 || x >= row) return
		if(y < 0 || y >= col) return
		if(grid[x][y] != 1) return
		grid[x][y] = -1
		traverse(grid, x-1, y)
		traverse(grid, x, y+1)
		traverse(grid, x, y-1)
		traverse(grid, x+1, y)
	}
	let count = 0
	for(let r = 0; r < row; r++) {
		for(let c = 0; c < col; c++) {
			if(grid[r][c] == 1) {
				count++
				traverse(grid, r, c)

			}
		}
	}
	return count
};
module.exports = numIslands
