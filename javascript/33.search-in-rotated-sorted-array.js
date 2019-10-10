/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	let count = 0
	while(nums[0] < nums[1]) {
		count++
		nums.push(nums.shift())
	}
	if(nums[0] > nums[1]) {
		count++
		nums.push(nums.shift())
	}
	let left = 0
	let right = nums.length

	while(left < right) {
		let mid = parseInt((left + right) / 2)
		if(nums[mid] >= target) {
			right = mid
		} else {
			left = mid + 1
		}
	}
	if(nums[left] == target) return ((left + count) % nums.length)

	return -1
};
console.log(search([], 0))
module.exports = search
