/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
	let stack = []
	let mul = 0
	let ans = ""
	for (let c of s) {
		if (c == '[') {
			stack.push([mul, ans])
			ans = ""
			mul = 0
		} else if (c == ']') {
			let item = stack.pop()
			let tmp = ans
			for (let i = 0; i < item[0]; i++) {
				tmp += ans
			}
			ans = item[1] + tmp
		} else if (c >= 0 && c <= 9){
			mul = mul * 10 + parseInt(c)
		} else {
			ans += c
		}
	}
	console.log(ans)
	return ans
};

decodeString("3[a]2[bc]")
