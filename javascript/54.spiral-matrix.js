/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	let down = {i: 1, j: 0}
	let up = {i: -1, j: 0}
	let left = {i: 0, j: -1}
	let right = {i: 0, j: 1}
	let order = [right, down, left, up]
	let ans = []
	if (matrix.length == 0) return []
	let len = matrix.length * matrix[0].length
	let idx = 0
	let i = 0, j = -1
	let trace = {}
	while (ans.length < len) {
		let dir = order[idx]
		if (matrix[i + dir.i] != undefined
			&& matrix[i + dir.i][j + dir.j] != undefined
			&& trace[(i + dir.i)+','+(j + dir.j)] != 1) {
			ans.push(matrix[i + dir.i][j + dir.j])
			trace[(i + dir.i)+','+(j + dir.j)] = 1
			i += dir.i
			j += dir.j
		} else {
			idx = (idx + 1) % 4
		}
	}
	return ans
};
// console.log(spiralOrder([
// 	[1, 2, 3, 4],
// 	[5, 6, 7, 8],
// 	[9, 10, 11, 12]
// ]))
//
// console.log(spiralOrder([
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ]))
//
// console.log(spiralOrder([
// 	[1]
// ]))

// console.log(spiralOrder([
// 	[2,5],
// 	[8,4],
// 	[0,-1]
// ]))
