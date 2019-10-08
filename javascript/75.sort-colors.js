/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors1 = function (nums) {
// 	let p0 = 0
// 	let p2 = nums.length - 1
// 	let cur = 0
// 	while (cur <= p2) {
// 		if (nums[cur] == 0) {
// 			let tmp = nums[p0]
// 			nums[p0] = 0
// 			nums[cur] = tmp
// 			p0++
// 			cur++
// 		} else if (nums[cur] == 1) {
// 			cur++
// 		} else if (nums[cur] == 2) {
// 			let tmp = nums[p2]
// 			nums[p2] = 2
// 			nums[cur] = tmp
// 			p2--
// 		}
// 	}
// };

var sortColors = function (nums) {
	let len = nums.length
	let r = 0, w = 0, b = 0
	for (let i = 0; i < len; i++) {
		switch (nums[i]) {
			case 0:
				r++;
				break;
			case 1:
				w++;
				break;
			case 2:
				b++;
				break;
		}
	}
	for (let i = 0; i < len; i++) {
		if(r > 0) {
			nums[i] = 0
			r--
		} else if(w > 0) {
			nums[i] = 1
			w--
		} else if(b > 0) {
			nums[i] = 2
			b--
		}
	}
};

