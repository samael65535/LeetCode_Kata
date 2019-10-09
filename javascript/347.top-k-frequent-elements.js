/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	let ans = {}
	for (let i = 0; i < nums.length; i++) {
		let c = nums[i]
		if (!ans[c]) ans[c] = [c, 0]
		ans[c][1]++
	}
	console.log(ans)
	let list  = Object.values(ans).sort((a, b) => {
		return b[1] - a[1]
	})

	console.log(list)
	list = list.map((i) => {
			return i[0]
		})
	return list.slice(0, k)

};
// console.log(topKFrequent([1,1,1,2,2,3], 2))
// console.log(topKFrequent([1], 1))
console.log(topKFrequent([-1, -1], 2))
