/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var dict = {};
var combinationSum2 = function(candidates, target) {
	var arr = candidates.sort(function(a, b){return a-b;});
	while (arr[0] > target) {
		arr.shift();
	}
	var arr1 = [];
	dict = {};
	var ret = [];
	dfs(arr, target, 0, arr1)
	var t = []
	for (var key in dict) {
		key.split(',').forEach(function(c, i){
			t.push(parseInt(c));
		}, this);
		ret.push(t.slice());			
		t = [];
	}
	return ret;
}

var dfs = function(arr, target, i, arr1) {
	if (target == 0) {
		dict[arr1.slice().join()] = 0;
		return;
	}
	
	for (var j = i; j < arr.length; j++) {
		if (target < arr[j]) return;
		arr1.push(arr[j]);
		dfs(arr, target - arr[j], j+1, arr1);
		arr1.pop();
	}
}
//console.log(combinationSum([10, 1, 2, 7, 6, 1, 5], 8));
//console.log(combinationSum([2, 3, 6, 7], 7));