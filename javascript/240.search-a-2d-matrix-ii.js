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


var searchMatrix2 = function (matrix, target) {
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
				mid = parseInt((start + end) / 2)
			}
		}
	}
	return false
};


var searchMatrix = function (matrix, target) {
	// 缩小方块
	let row = matrix.length
	if (row == 0) return false
	let col = matrix[0].length
	let search = (left, right, top, bottom) => {
		if (left > right) return false
		if (top > bottom) return false
		if (matrix[top][left] > target || matrix[bottom][right] < target) {
			return false
		}
		let r = top
		let mid = parseInt(left + (right - left) / 2)
		while (r <= bottom && matrix[r][mid] <= target) {
			if (matrix[r][mid] == target) return true
			r++
		}
		return search(left, mid - 1, r, bottom) ||
			search(mid + 1, right, top, r - 1)
	}

	return search(0, col - 1, 0, row - 1)

}

module.exports = searchMatrix
