/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
	var hour = 0;
	var minute = 0;
	var watch = [
		[1, 2, 4, 8],
		[1, 2, 4, 8, 16, 32]
	];
	var ret = [];

	// 全组合
	return ret;	
};

function getCombibation(nums, c, ret, vis, start) {
	if (c == 0) {
		console.log(ret);
		return ret;
	} 
	for (var i = start; i < nums.length; i++) {
		if (vis[i] == 0) {
			vis[i] = 1;
			ret.push(nums[i]);
			getCombibation(nums, c-1, ret, vis, i);
			ret.pop(nums[i]);
			vis[i] = 0;
		}
	}
}	

var ret = [];
var vis = [0, 0, 0, 0]
getCombibation([1, 2, 4, 8], 2, ret, vis, 0);
console.log(ret)