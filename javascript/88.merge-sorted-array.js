/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge1 = function (nums1, m, nums2, n) {
	// simple solution
	for (let i = m; i < m + n; i++) {
		nums1[i] = nums2[i - m]
	}
	nums1.sort((a, b) => a - b)
};

var merge = function (nums1, m, nums2, n) {
	let p1 = m - 1
	let p2 = n - 1
	let p = m + n - 1
	while (p1 >= 0 && p2 >= 2) {
		nums1[p] = Math.max(nums1[p1], nums2[p2])
		if (nums1[p1] < nums2[p2]) {
			p2--
		}
		else {
			p1--
		}
		p--
	}
	for (let i = 0 ; i <p2+1; i ++) {
		nums1[i] = nums2[i]
	}

};
module.exports = merge
