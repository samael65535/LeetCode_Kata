/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
	nums = nums.sort(function(a, b) {
		return a-b;
	});
	var counter = 1;
	var res = [];
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] == nums[i+1]) {
			counter++;
		} else {
			if (counter > parseInt(nums.length / 3)) {
				res.push(nums[i]);
			}
			counter = 1;
		}
	}
	console.log(res)
	return res;
};

var scores = [1,2,3]; 
majorityElement(scores)
