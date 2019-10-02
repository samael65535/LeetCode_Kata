/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	let ans = []
	let len = nums.length
	if(len == 0) return [[]]
	let helper = (n, tmp) => {
		if (tmp.length == len) {
			ans.push(tmp.reduce((acc, i) => {
				acc.push(nums[i])
				return acc
			}, []))
			return
		}
		for (let i = 0; i < len; i++) {
			if (tmp.indexOf(i) == -1) {
				helper(i, tmp.concat([i]))
			}
		}
	}

	for (let i = 0; i < len; i++) {
		helper(i,[i])
	}
	return ans
};

module.exports = permute
