/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes2 = function (nums) {
	let l = nums.length
	for (let i = 0; i < l; i++) {
		let n = nums[i]
		if (n == 0) {
			for (let j = i + 1; j < l; j++) {
				let n = nums[j]
				if (n != 0) {
					nums[i] = n
					nums[j] = 0
					break;
				}
			}
		}
	}

	return nums
};

var moveZeroes = function (nums) {
	let l = nums.length
	let nonZeroIdx = 0
	for (let i = 0; i < l; i++) {
		let n = nums[i]
		if (n != 0) {
			nums[nonZeroIdx++] = n
		}
	}
	for (let i = nonZeroIdx; i < l; i++) {
		nums[i] = 0
	}
	return nums
};
moveZeroes([0, 1, 0, 3, 12])

moveZeroes([0, 0, 3, 12])

moveZeroes([0, 3, 3])

moveZeroes([3, 12, 0, 0])

moveZeroes([3, 12,])
