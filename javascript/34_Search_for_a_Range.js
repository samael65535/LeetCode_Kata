/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var min = -1;
var max = -1;
var searchRange = function(nums, target) {
	var start = 0;
	var end = nums.length;
	min = -1;
	max = -1;
//	var mid = (end + start) / 2;
	binSearch(start, end, target, nums)
	console.log(min, max);
	return [min, max];
};
var binSearch = function (start, end, target, nums) {
	var mid = parseInt((start + end)/ 2);
	if (start == end) return;
	if (nums[mid] == target) {
		if (min == -1) min = mid
		else min = mid < min ? mid : min;
		max = mid > max ? mid : max;
	}
	binSearch(start, mid, target, nums);
	binSearch(mid+1, end, target, nums);
}

//console.log(searchRange([5, 7, 7, 8, 8, 10], ))
console.log(searchRange([1], 1));
console.log(searchRange([5, 7, 7, 8, 8, 10], 8))