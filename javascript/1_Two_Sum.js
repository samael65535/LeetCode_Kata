/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	var k;
	for(var i = 0; i < nums.length; i++) {
		k = target - nums[i]
		for(var j = i + 1; j < nums.length; j++) {
			if (k == nums[j])
				return [i, j]			
		}
	}
	return [];
};

console.log(twoSum([2, 7, 11, 15], 18));