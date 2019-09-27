/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
 	let l = nums.length
	return nums.sort((a, b) => a-b)[parseInt(l/2)]


};

var majorityElement = function(nums) {
	let hash = {}
	let len = nums.length
	for(let i = 0;i <len; i++) {
		let num = nums[i];
		if(!hash[num]) hash[num] = 0
		hash[num]++
		if(hash[num] >= len / 2) return num
	}
}
console.log(majorityElement([3,2,3]))
module.exports = majorityElement
