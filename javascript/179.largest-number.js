/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
	nums.sort((a, b) => {
		let order1 = a.toString() + b.toString()
		let order2 = b.toString() + a.toString()
		return order2.localeCompare(order1)
	})
	if(nums[0] == 0) return '0'
	return nums.join('')
};
console.log(largestNumber([3,30,34,5,9]))
module.exports = largestNumber
