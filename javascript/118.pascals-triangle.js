/**
 * @param {number} numRows
 * @return {number[][]}
 */
let ans = [[], [1]]
var generate = function(numRows) {
	let len =  ans.length
	if(len <= numRows) {
		for (let i = len; i <= numRows; i++) {
			let list = [1]
			for (let j = 1; j < i; j++) {
				list.push((ans[i - 1][j] || 0) + (ans[i - 1][j - 1] || 0))
			}
			ans.push(list)
		}
	}
	return ans.slice(1,numRows+1)
};

module.exports = generate
