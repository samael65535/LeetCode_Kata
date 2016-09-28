/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var min = -1;
var max = -1;
var searchRange = function(nums, target) {
	var start = 0;
	var end = nums.length - 1;
	min = -1;
	max = -1;
//	var mid = (end + start) / 2;
	binSearch(start, end, target, nums)
	console.log(min, max);
};
var binSearch = function (start, end, target, nums) {
	if (start == end) return;
	var mid = (start + end)	/ 2;
	if (nums[mid] == target) {
		if (min == -1) min = mid
		else min = mid < min ? mid : min;
		max = mid > max ? mid : min;
	}
	binSearch(start, mid, target, nums);
	binSearch(mid+1, mid, target, nums);
}

