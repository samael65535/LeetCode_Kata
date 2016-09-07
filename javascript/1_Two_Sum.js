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

var twoSum2 = function(nums, target) {
	var map = {};
	for(var i = 0; i < nums.length; i++) {
		var k = target - nums[i];
		if (map.hasOwnProperty(k)) return [map[k], i];
		map[nums[i]] = i;
	}

	return [];
};

console.log(twoSum2([2, 7, 11, 15], 9));