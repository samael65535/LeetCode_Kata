/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
	let p0 = 0
	let p2 = nums.length - 1
	let cur = 0
	while(cur <= p2) {
		if(nums[cur] == 0) {
			let tmp = nums[p0]
			nums[p0] = 0
			nums[cur] = tmp
			p0++
			cur++
		} else if(nums[cur] == 1) {
			cur++
		} else if(nums[cur] == 2) {
			let tmp = nums[p2]
			nums[p2] = 2
			nums[cur] = tmp
			p2--
		}
	}
};

