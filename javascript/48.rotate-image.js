/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function (matrix) {
	let size = matrix[0].length
	let tmp = 0

	// 矩阵转置
	for (let i = 0; i < size; i++) {
		for (let j = i; j < size; j++) {
			tmp = matrix[i][j]
			matrix[i][j] = matrix[j][i]
			matrix[j][i] = tmp
		}
	}

	// 矩阵水平翻转
	matrix.map((row) => {
		for (let i = 0; i < size/2; i++){
			tmp  = row[i]
			row[i] = row[size-i-1]
			row[size-i-1] = tmp
		}
	})
	return matrix
};
// let matrix = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ]
// rotate(matrix)
// console.log(matrix)
//
// matrix = [
// 	[ 5, 1, 9,11],
// 	[ 2, 4, 8,10],
// 	[13, 3, 6, 7],
// 	[15,14,12,16]
// ]
// rotate(matrix)
// console.log(matrix)
//
//
// matrix = [
// 	[1]
// ]
//
// rotate(matrix)
// console.log(matrix)
