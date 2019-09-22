/***
 * Created by samael
 */


var minimumAbsDifference = function (arr) {
	arr.sort((a, b) => a - b)
	let dic = {}
	let len = arr.length - 1
	let minAbs = Math.abs(arr[0] - arr[len])
	for (let i = 0; i < len; i++) {
		let a = arr[i]
		let b = arr[i + 1]
		if (minAbs >= Math.abs(a - b)) {
			minAbs = Math.abs(a - b)
			if(!dic[minAbs]) dic[minAbs] = []
			dic[minAbs].push([a, b])
		}
	}
	return dic[minAbs]
}
console.log(minimumAbsDifference([1,3,6,10,15]))
console.log(minimumAbsDifference([4,2,1,3]))
console.log(minimumAbsDifference([3,8]))
