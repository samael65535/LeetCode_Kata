/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
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

var twoSum3 = function(nums, target) {
	var map = {};
	for(var i = 0; i < nums.length; i++) {
		var k = target - nums[i];
		if (map.hasOwnProperty(k)) return [map[k], i];
		map[nums[i]] = i;
	}

	return [];
};

var towSum = function(nums,target) {
	let map = {}
	let l = nums.length
	for (let i = 0; i < l; i++) {
		let e = nums[i]
		if (map[target-e] != undefined ) {
			return [map[target - e], i]
		}
		if (map[e] == undefined) {
			map[e] = i
		}

	}
}

console.log(towSum([3,5,3], 6).toString())
