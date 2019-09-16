/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
	this._originNums = nums.slice(0)
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
	return this._originNums.slice(0)
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
	let arr = this._originNums.slice(0)
	let res = []
	while (arr.length != 0) {
		let idx = 0 + parseInt(arr.length * Math.random())
		res.push(arr[idx])
		arr.splice(idx, 1)
	}
	return res

};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

module.exports = Solution
