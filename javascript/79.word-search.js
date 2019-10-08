/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
	let i = 0
	let j = 0
	let row = board.length
	let col = board[0].length
	let len = word.length
	let dfs = (i, j, map, depth) => {
		// 边界判断
		if (i < 0) return false
		if (i >= row) return false
		if (j < 0) return false
		if (j >= col) return false
		// 字符判断
		if (word[depth] != map[i][j]) return false
		// 字符串到末尾
		if (len - 1 == depth) return true
		let ch = board[i][j]
		board[i][j] = 0
		let found = dfs(i + 1, j, board, depth + 1) ||
			dfs(i - 1, j, board, depth + 1) ||
			dfs(i, j + 1, board, depth + 1) ||
			dfs(i, j - 1, board, depth + 1)
		board[i][j] = ch
		return found
	}
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (dfs(i, j, board, 0)) {
				return true
			}
		}
	}
	return false
}

// console.log(exist([
// 		['A','B','C','E'],
// 		['S','F','C','S'],
// 		['A','D','E','E']
// ], 'ABCCED'))
//
// console.log(exist([
// 	['A','B','C','E'],
// 	['S','F','C','S'],
// 	['A','D','E','E']
// ], 'SEE'))
//
// console.log(exist([
// 	['A','B','C','E'],
// 	['S','F','C','S'],
// 	['A','D','E','E']
// ], 'ABCB'))
