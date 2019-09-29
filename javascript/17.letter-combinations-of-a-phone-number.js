/**
 * @param {string} digits
 * @return {string[]}
 */
var keyboard = [0,
	[], ['a', 'b', 'c'], ['d', 'e', 'f'],
	['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'],
	['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']
]
var letterCombinations = function (digits) {
	let ans = []
	let len = digits.length
	if(len == 0) return ans
	let helper = (rest, tmp) => {
		if (tmp.length == len) {
			ans.push(tmp)
			tmp = ""
		}
		for (let i = 1; i < rest.length; i++) {
			let n = parseInt(rest[i])
			for(let j = 0; j < keyboard[n].length; j++) {
				helper(
					rest.slice(i),
					tmp + keyboard[n][j]
				)
			}
		}
	}
	let list = keyboard[parseInt(digits[0])]
	for(let i = 0; i < list.length; i++) {
		helper(digits, list[i])
	}
	return ans
}

module.exports = letterCombinations

