/**
 * @param {number[][]} grid
 * @return {number}
 */
var canRotting = function (grid) {
	let row = grid.length
	let col = grid[0].length
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (grid[i][j] == 1.5) grid[i][j] = 2
		}
	}
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (grid[i][j] == 2) {
				if (grid[i][j - 1] == 1 ||
					grid[i][j + 1] == 1) return true
				if (grid[i - 1] != undefined && grid[i - 1][j] == 1) return true
				if (grid[i + 1] != undefined && grid[i + 1][j] == 1) return true
			}
		}
	}
	return false
}
var doRotting = function (grid) {
	let row = grid.length
	let col = grid[0].length
	let flag = false
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (grid[i][j] == 1) {
				if (grid[i] && grid[i][j - 1] == 2) {
					grid[i][j] = 1.5
					flag = true
				}

				if (grid[i] && grid[i][j + 1] == 2) {
					grid[i][j] = 1.5
					flag = true
				}

				if (grid[i - 1] != undefined && grid[i - 1][j] == 2) {
					grid[i][j] = 1.5
					flag = true

				}

				if (grid[i + 1] != undefined && grid[i + 1][j] == 2) {
					grid[i][j] = 1.5
					flag = true

				}
			}
		}
	}
	return flag
}
var isAllRotting = function(grid) {
	let row = grid.length
	let col = grid[0].length
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if(grid[i][j] == 1) return false
		}
	}
	return true
}
var orangesRotting = function (grid) {
	let ans = 0
	//if(isAllRotting(grid)) return 0
	while (canRotting(grid)) {
		if(doRotting(grid))
			ans++
	}

	return isAllRotting(grid) ? ans : -1
};

module.exports = orangesRotting
