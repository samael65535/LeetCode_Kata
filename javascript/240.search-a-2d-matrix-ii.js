/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix1 = function (matrix, target) {
	let row = matrix.length
	if (row == 0) return false
	let col = matrix[0].length
	for (let r = 0; r < row; r++) {
		let minOfRow = matrix[r][0]
		let maxOfRow = matrix[r][col - 1]
		if (target >= minOfRow && target <= maxOfRow) {
			let i = matrix[r].indexOf(target)
			if (i != -1) return true
		}
	}
	return false
};


var searchMatrix = function (matrix, target) {
	// 二分搜索
	let row = matrix.length
	if (row == 0) return false
	let col = matrix[0].length
	for (let r = 0; r < row; r++) {
		let minOfRow = matrix[r][0]
		let maxOfRow = matrix[r][col - 1]
		let rowNums = matrix[r]
		if (target >= minOfRow && target <= maxOfRow) {
			let start = 0
			let end = col - 1
			let mid = parseInt((start + end) / 2)
			while (start <= end) {
				if (target < rowNums[mid]) {
					end = mid - 1
				} else if (target > rowNums[mid]) {
					start = mid + 1
				} else {
					return true
				}
				mid = parseInt((start + end)/2)
			}
		}
	}
	return false
};

module.exports = searchMatrix
