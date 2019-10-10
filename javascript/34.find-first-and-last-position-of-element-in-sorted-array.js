/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	let start = 0
	let end = nums.length
	let mid;

	// 找start
	start = 0
	end = nums.length

	let b = -1
	while (start < end) {
		mid = parseInt((end + start) / 2)
		if (nums[mid] >= target) {
			end = mid
		} else {
			start = mid + 1
		}

	}
	if (nums[start] == target) b = start
	else b = -1

	// 找end
	let e = -1
	start = 0
	end = nums.length
	while (start < end) {
		mid = parseInt((end + start) / 2)
		if (nums[mid] > target) {
			end = mid
		} else {
			start = mid + 1
		}
	}

	if (nums[start - 1] == target) e = start - 1
	else e = -1

	return [b, e]
};
module.exports = searchRange

