/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
	let ans = []
	let min = 10000000
	let pivot = 0
	let list= []
	for (let i = 0 ; i < arr.length; i++) {
		if(min > Math.abs(arr[i] - x)) {
			pivot = i
			min = Math.abs(arr[i] - x)
		}
		list[i] = Math.abs(arr[i] - x)
	}
	ans[0] = arr[pivot]
	let count = k - 1
	let i = 1
	let j = 1
	while(count>0) {
		let a = list[pivot-i]
		let b = list[pivot+j]
		if(a<=b || b == undefined) {
			ans.unshift(arr[pivot-i])
			i++
			count--
		}
		if(a>b || a== undefined) {
			ans.push(arr[pivot+j])
			j++
			count--
		}
	}
	return ans

};
