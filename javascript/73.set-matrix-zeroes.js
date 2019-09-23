/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes2 = function (matrix) {
	let m = matrix.length
	let n = matrix[0].length
	let zeroFlag = []
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (matrix[i][j] == 0) {
				zeroFlag.push([i, j])
			}
		}
	}
	zeroFlag.forEach((item, i) => {
		let [row, col] = [...item]
		for (let j = 0; j < n; j++) {
			matrix[row][j] = 0
		}

		for (let i = 0; i < m; i++) {
			matrix[i][col] = 0
		}
	})
};


var setZeroes3 = function (matrix) {
	let m = matrix.length
	let n = matrix[0].length
	let zeroRowFlag = new Set()
	let zeroColFlag = new Set()
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (matrix[i][j] == 0) {
				zeroRowFlag.add(i)
				zeroColFlag.add(j)
			}
		}
	}
	zeroRowFlag.forEach((row) => {
		for (let j = 0; j < n; j++) {
			matrix[row][j] = 0
		}
	})

	zeroColFlag.forEach((col) => {
		for (let i = 0; i < m; i++) {
			matrix[i][col] = 0
		}
	})
};

var setZeroes = function (matrix) {
	let m = matrix.length
	let n = matrix[0].length
	let isCol = false // 如果 第一列是0
	for (let i = 0; i < m; i++) {
		if (matrix[i][0] == 0) {
			isCol = true
		}
		for (let j = 1; j < n; j++) {
			if (matrix[i][j] == 0) {
				matrix[i][0] = 0
				matrix[0][j] = 0
			}
		}
	}
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			if (matrix[i][0] == 0
				|| matrix[0][j] == 0) {
				matrix[i][j] = 0
			}
		}
	}

	if(matrix[0][0] == 0) {
		for(let j = 0; j < n; j++) {
			matrix[0][j] = 0
		}
	}

	if(isCol) {
		for(let i = 0; i < m; i++) {
			matrix[i][0] = 0
		}
	}
}
module.exports = setZeroes
