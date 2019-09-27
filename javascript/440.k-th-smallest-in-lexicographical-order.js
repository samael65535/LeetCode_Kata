/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber1 = function (n, k) {
	// 超时
	let ans = []
	for (let i = 1; i <= n; i++) {
		ans.push(i)
	}
	ans.sort((a, b) => {
		return a.toString().localeCompare(b.toString())
	})
	return ans[k - 1]
};

var findKthNumber1 = function (n, k) {
	let getCount = (prefix, n) => {
		let cur = prefix;
		let next = prefix + 1;
		let count = 0;
		while (cur <= n) {
			count += Math.min(n + 1, next) - cur;
			cur *= 10;
			next *= 10;
		}
		return count;
	}
	let counter = 1
	let prefix = 1
	while (counter < k) {
		let c = getCount(prefix, n)
		if (counter + c > k) {
			counter++
			prefix *= 10
		} else {
			counter += c
			prefix++
		}
	}
	return prefix
};


var findKthNumber = function (n, k) {
	let count = 1
	let prefix = 1
	let getCount = (prefix, n) => {
		let cur = prefix
		let next = prefix + 1
		let count = 0
		while (cur < next) {
			count += Math.min(n + 1, next) - cur
			cur *= 10
			next * 10
		}
		return count
	}
	while (count < k) {
		let c = getCount(prefix, n)
		if (count + c <= k) {
			count += c
			prefix++
		} else {
			count++
			prefix *= 10
		}
	}
	return prefix
}

module.exports = findKthNumber
