/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
	let flag = [true]
	let len = nums.length
	if(len == 1 && nums[0] == 0) return false

	for(let i = 1; i < nums.length; i++) {
		flag[i] = false
		for(let j = i - 1; j >= 0; j--) {
			if(i <= nums[j] + j) {
				flag[i] = true && flag[j]
			}
		}
	}
	return flag.pop()
};
canJump([1,0,1,0])
canJump([0,2,3])
canJump([1,0,3])
canJump([2,3,1,1])
canJump([3,2,1,0,4])
module.exports = canJump
