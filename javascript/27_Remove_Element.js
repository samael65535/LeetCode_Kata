/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	var tmp = 0;
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] != val) {
			nums[tmp++] = nums[i]
		}
	}
	return tmp;
};	
console.log(removeElement([1,2,3,4],2));