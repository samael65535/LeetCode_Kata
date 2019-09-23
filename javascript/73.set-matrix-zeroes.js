/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
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

module.exports = setZeroes
