/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
	var output1 = new Array(nums.length);
	output1[0] = 1;
	var output2 = new Array(nums.length);
	output2[0] = 1;
	for (var i = 1; i < nums.length; i++) {
		output1[i] = nums[i-1] * output1[i-1];
		output2[i] = 1;
	}
	for (var i = nums.length-2; i >= 0; i--) {
		output2[i] = nums[i+1] * output2[i+1];		
	}
	for (var i = 0; i < nums.length; i++) {
		output1[i] = output2[i] * output1[i];
	}
	return output1;
};

productExceptSelf([1,2,3,4]);
