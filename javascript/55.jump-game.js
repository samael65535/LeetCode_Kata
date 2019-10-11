/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
	let len = nums.length
	if(len == 1 && nums[0] == 0){
		return false
	}

	for(let i = 1; i < nums.length; i++) {
		let flag = false
		for(let j = i - 1; j >= 0; j--) {
			if(i <= nums[j] + j) {
				flag = true
			}
		}
		if(!flag) {
			return false
		}
	}
	return true//flag.pop()
};
canJump([0])
canJump([1,0,1,0]) // false
canJump([0,2,3]) // false
canJump([1,0,3]) // false
canJump([2,3,1,1]) // true
canJump([3,2,1,0,4]) // false
module.exports = canJump
