/**
 * @param {number} n
 * @return {number}
 */
var uglyArr = [1]
var nthUglyNumber = function(n) {
	while (uglyArr.length < n) {
		var max = uglyArr[uglyArr.length -1];
		var minD = 0;
		for (var i = 0; i < uglyArr.length; i++) {
			var d = uglyArr[i] * 2;
			if (d - max > 0) { // 大于max的最小值
				if (d - max < minD || minD == 0) minD = d - max
			}
		}
		for (var i = 0; i < uglyArr.length; i++) {
			var d = uglyArr[i] * 3;
			if (d - max > 0) { // 大于max的最小值
				if (d - max < minD || minD == 0) minD = d - max
			}
		}
	    for (var i = 0; i < uglyArr.length; i++) {
			var d = uglyArr[i] * 5;
			if (d - max > 0) { // 大于max的最小值
				if (d - max < minD || minD == 0) minD = d - max
			}
		}
		max += minD;
		uglyArr.push(max);
	}
	return uglyArr[n-1];
};

console.log(nthUglyNumber(12));
