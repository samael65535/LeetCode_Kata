/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var ret = [];
var combinationSum = function(candidates, target) {
	var arr = candidates.sort(function(a, b){return b-a;});
	while (arr[0] > target) {
		arr.shift();
	}
	var arr1 = [];
	dfs(arr, target, 0, arr1)
	return ret;
}

var dfs = function(arr, target, i, arr1) {
	if (target == 0) {
		ret.push(arr1.slice());
	}
	
	for (var j = i; j < arr.length; j++) {
		if (target < arr[j]) return;
		arr1.push(arr[j]);
		dfs(arr, target - arr[j], j, arr1);
		arr1.pop();
	}
	
}
console.log(combinationSum([2, 3, 6, 7], 7));