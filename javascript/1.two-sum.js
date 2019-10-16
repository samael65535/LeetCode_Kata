/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let map = {}
	for (let i = 0; i < nums.length; i++) {
		if(map[target - nums[i]] != undefined) {
			return [i, map[target - nums[i]]]
		}
		map[nums[i]] = i
	}
};

console.log(twoSum([3, 5, 1], 6))
iyca
