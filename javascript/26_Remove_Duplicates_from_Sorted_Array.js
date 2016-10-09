/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	var len = 1;
	for (var i = 1; i < nums.length; i++) {
		if (nums[i-1] !== nums[i]) {
			nums[len++] = nums[i];
		}
	}
	return len;
//	return nums.splice(0, len);
};

//console.log(removeDuplicates([1]));