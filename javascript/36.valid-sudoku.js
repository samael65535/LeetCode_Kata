/**
 * @param {character[][]} board
 * @return {boolean}
 */
var checkRow = function (r, board) {
	let set = new Set()
	for (let i = 0; i < 9; i++) {
		let e = board[r][i]
		if (e == '.') continue
		if (set.has(e)) {
			return false
		}
		else set.add(e)
	}
	return true
}
var checkCol = function (c, board) {
	let set = new Set()
	for (let i = 0; i < 9; i++) {
		let e = board[i][c]
		if (e == '.') continue
		if (set.has(e)) {
			return false
		}
		else set.add(e)
	}
	return true
}
var checkBlock = function (b, board) {
	let set = new Set()
	let m = parseInt(b / 3) * 3
	let n = parseInt(b % 3) * 3

	for (let i = m; i < m+3; i++) {
		for (let j = n; j < n+3; j++) {
			let e = board[i][j]
			if (e == '.') continue
			if (set.has(e)) {
				return false
			}
			else set.add(e)
		}
	}
	return true
}
var isValidSudoku = function (board) {
	for (let i = 0; i < 9; i++) {
		if (checkRow(i, board) == false) {
			return false
		}
	}
	for (let i = 0; i < 9; i++) {
		if (checkCol(i, board) == false) {
			return false
		}
	}
	for (let i = 0; i < 9; i++) {
		if (checkBlock(i, board) == false) {
			return false
		}
	}
	return true
};
// console.log(isValidSudoku([
// 	["8","3",".",".","7",".",".",".","."],
// 	["6",".",".","1","9","5",".",".","."],
// 	[".","9","8",".",".",".",".","6","."],
// 	["8",".",".",".","6",".",".",".","3"],
// 	["4",".",".","8",".","3",".",".","1"],
// 	["7",".",".",".","2",".",".",".","6"],
// 	[".","6",".",".",".",".","2","8","."],
// 	[".",".",".","4","1","9",".",".","5"],
// 	[".",".",".",".","8",".",".","7","9"]
//
// ]))
//
//
// console.log(isValidSudoku([
// 	[".", ".", "4", ".", ".", ".", "6", "3", "."],
// 	[".", ".", ".", ".", ".", ".", ".", ".", "."],
// 	["5", ".", ".", ".", ".", ".", ".", "9", "."],
// 	[".", ".", ".", "5", "6", ".", ".", ".", "."],
// 	["4", ".", "3", ".", ".", ".", ".", ".", "1"],
// 	[".", ".", ".", "7", ".", ".", ".", ".", "."],
// 	[".", ".", ".", "5", ".", ".", ".", ".", "."],
// 	[".", ".", ".", ".", ".", ".", ".", ".", "."],
// 	[".", ".", ".", ".", ".", ".", ".", ".", "."]
// ]))
//
//
// console.log(isValidSudoku([
// 	["5", "3", ".", ".", "7", ".", ".", ".", "."],
// 	["6", ".", ".", "1", "9", "5", ".", ".", "."],
// 	[".", "9", "8", ".", ".", ".", ".", "6", "."],
// 	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
// 	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
// 	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
// 	[".", "6", ".", ".", ".", ".", "2", "8", "."],
// 	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
// 	[".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ]))
//
// console.log(isValidSudoku([
// 	[".",".",".",".","5",".",".","1","."],
// 	[".","4",".","3",".",".",".",".","."],
// 	[".",".",".",".",".","3",".",".","1"],
// 	["8",".",".",".",".",".",".","2","."],
// 	[".",".","2",".","7",".",".",".","."],
// 	[".","1","5",".",".",".",".",".","."],
// 	[".",".",".",".",".","2",".",".","."],
// 	[".","2",".","9",".",".",".",".","."],
// 	[".",".","4",".",".",".",".",".","."]
// ]))