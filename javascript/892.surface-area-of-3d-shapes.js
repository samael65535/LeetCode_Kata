/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
	let sum = 0
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if(grid[i][j] == 0) continue
			let k = grid[i][j] * 4 + 2
			let up = Math.min(grid[i - 1] ? grid[i - 1][j] : 0, grid[i][j] )
			let down = Math.min(grid[i + 1] ? grid[i + 1][j] : 0, grid[i][j])
			let left = Math.min(grid[i][j - 1] ? grid[i][j - 1] : 0, grid[i][j])
			let right = Math.min(grid[i][j + 1] ? grid[i][j + 1] : 0, grid[i][j])
			sum += k - up - down - left - right
		}
	}
	return sum
};

module.exports = surfaceArea
