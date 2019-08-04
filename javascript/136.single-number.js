/**
 * @param {number[]} nums
 * @return {number}
 */
const _ = require('lodash')
var singleNumber2 = function(nums) {
	let l = nums.length
	let cur = nums[0]
	for (let i = 1; i < l ; i++) {
		cur = cur ^ nums[i]
	}
	return cur

};
var singleNumber = function (nums) {
	return [...new Set(nums)].reduce((acc, cur) =>  acc+cur) * 2 - nums.reduce((a,b) => a+b)
}


var singleNumber = function (nums) {
	return nums.reduce((acc, cur) => acc^cur)
}
console.log(singleNumber([1,2,1,2,-6]))
