/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
	var ret = nums[0];
	
	var max = nums[0], min = nums[0];
	for (var i = 1; i < nums.length; i++) {
		var p1 = Math.max(nums[i] * max, nums[i] * min);
		var p2 = Math.min(nums[i] * max, nums[i] * min);
		
		max = Math.max(p1, nums[i]);
		min = Math.min(p2, nums[i]);

		ret = Math.max(max, ret);
	}
	return ret;
};
