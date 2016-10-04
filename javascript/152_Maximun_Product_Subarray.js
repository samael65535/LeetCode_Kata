/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
	var arr1 = [nums[0]];
	var arr2 = [nums[0]];
	var max = nums[0];
	for (var i = 1; i < nums.length; i++) {
		var p1 = Math.max(nums[i] * arr1[i-1], nums[i] * arr2[i-1]);
		var p2 = Math.min(nums[i] * arr1[i-1], nums[i] * arr2[i-1]);
		
		arr1[i] = Math.max(p1, nums[i]);
		arr2[i] = Math.min(p2, nums[i]);

		max = Math.max(max, arr1[i]);
	}
	return max;
};

maxProduct([-2]);