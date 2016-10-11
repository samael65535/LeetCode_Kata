/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	if (nums.length < 3) return nums.length;
	var idx = 2;
	for (var i = 2; i < n; i++) {
		if (nums[i] != nums[idx - 2]) {
			nums[idx++] = nums[i];
		}
	}
	return idx;
};