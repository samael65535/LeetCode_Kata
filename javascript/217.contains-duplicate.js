/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	let counter = {}
	let l = nums.length
	for (let i = 0; i <l; i ++) {
		if (counter[nums[i]]) return true
		counter[nums[i]] = true
	}
    return false
};

var containsDuplicate1 = function(nums) {
	let l = nums.length
	for (let i = 0; i <l; i ++) {
		for (let j = i+1; j <l; j++) {
			if (nums[i] - nums[j] == 0) return true
		}
	}
	return false
};
