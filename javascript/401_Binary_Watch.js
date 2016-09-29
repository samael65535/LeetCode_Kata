/**
 * @param {number} num
 * @return {string[]}
 */

function getCombination(nums, c, arr, vis, start, ret) {
	if (c == 0) {
		ret.push(arr.slice());
		return 1;
	} 
	for (var i = start; i < nums.length; i++) {
		if (vis[i] == 0) {
			vis[i] = 1;
			arr.push(nums[i]);
			getCombination(nums, c-1, arr, vis, i, ret);
			arr.pop(nums[i]);
			vis[i] = 0;
		}
	}
}	

var readBinaryWatch = function(num) {
	var hour = 0;
	var minute = 0;
	var watch = [
		[1, 2, 4, 8],
		[1, 2, 4, 8, 16, 32]
	];
	var combination = [];
	
	var ret = [];
	
	for (var i = 0; i <= num; i++){
		minute = num - i;
		hour = i;
		var retMinute = [];
		var retHour = []
		var visHour = [0, 0, 0, 0]
		var visMinute = [0, 0, 0, 0, 0, 0];
		getCombination(watch[0], hour, [], visHour, 0, retHour);
		getCombination(watch[1], minute, [], visMinute, 0, retMinute);
		
		for (var h = 0; h < retHour.length; h++) {
			var sumHour = 0;
			retHour[h].forEach(function (elt, i) {
				sumHour += elt;
			});
			if (sumHour > 11) continue;
			for (var m = 0; m < retMinute.length; m++) {
				var sumMinute = 0;
				retMinute[m].forEach(function (elt, i) {
					sumMinute += elt;
				});
				if (sumMinute > 59) continue;
				if (sumMinute < 10) sumMinute = "0" + sumMinute;
				ret.push(sumHour+":"+sumMinute)

			}
		}
	}

	return ret;	
};


//console.log(readBinaryWatch(0));
