/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ans = ""
	let row = strs.length
	if (row == 0) return  ans
	let col = strs[0].length
	let flag = true
	for (let c = 0; c < col; c++) {
		let cur = strs[0][c]
		for (let r = 1; r < row; r++) {
			flag = flag && strs[r][c] == cur
			if (flag == false)  {
				return ans
			}
		}
		if (flag) {
			ans+=cur
		}
	}
	return ans
};

//
// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix( ["dog","racecar","car"]))
// console.log(longestCommonPrefix( ['aa']))
