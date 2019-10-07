/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
	if (nums.length == 0) return [[]]
	let ans = [[]]
	let helper = (set, depth, startIdx) => {
		ans.push(set)
		if(depth == nums.length) return
		for(let i = startIdx+1; i < nums.length; i++) {
			helper(set.concat([nums[i]]), depth+1, i)
		}
	}
	for(let i = 0; i < nums.length; i++) {
		helper([nums[i]], 1, i)
	}
	return ans
};
console.log(subsets([1]))
// console.log(subsets([1,2,3]))
// console.log(subsets([1,2,3,4]))
