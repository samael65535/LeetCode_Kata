/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement1 = function (nums) {
	// O(N)
	let len = nums.length
	for (let i = 0; i < len; i++) {
		if (i == 0 && nums[i + 1] < nums[i]) return i
		if (nums[i - 1] < nums[i] &&
			nums[i + 1] < nums[i]) {
			return i
		}
		if (i == len - 1 && nums[i - 1] < nums[i]) return i
	}
	return 0
};

var findPeakElement = function (nums) {
	// O(logN)
	let start = -1
	let end = nums.length
	let mid = parseInt((start + end) / 2)
	while (mid + 1 < end) {
		if (nums[mid + 1] < nums[mid]) {
			end = mid + 1
		} else if (nums[mid + 1] > nums[mid]) {
			start = mid
		}

		mid = parseInt((start + end) / 2)
	}
	return mid
};

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])) // 5
console.log(findPeakElement([1, 2, 3, 4, 5])) // 4
console.log(findPeakElement([1, 2, 3, 4, 5, 6])) // 5
console.log(findPeakElement([1])) // 0
console.log(findPeakElement([1, 2, 3, 1])) // 2
console.log(findPeakElement([5, 4, 3, 2, 1])) // 0
console.log(findPeakElement([1,2,3,4])) // 0
