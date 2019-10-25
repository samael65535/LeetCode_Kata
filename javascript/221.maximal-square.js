/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
	let rows = matrix.length
	if (rows == 0) return 0
	let cols = rows > 0 ? matrix[0].length : 0

	const dp = new Array(rows + 1).fill(0).map(_ => new Array(cols + 1).fill(0));
	for (let i = 0; i <= rows; i++) {
		for (let j = 0; j <= cols; j++) {
			dp[i][j] = 0
		}
	}
	let maxsqlen = 0
	for(let i = 1; i <= rows; i++) {
		for(let j = 1; j <= cols; j++) {
			if(matrix[i-1][j-1] == 1) {
				dp[i][j] = Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]) + 1;
				maxsqlen = Math.max(maxsqlen, dp[i][j])
			}
		}
	}
	return maxsqlen * maxsqlen
};

// console.log(maximalSquare([
// 	["1","0","1","0","0"],
// 	["1","0","1","1","1"],
// 	["1","1","1","1","1"],
// 	["1","0","0","1","0"]
// ]))
//console.log(maximalSquare([["0"]]))
