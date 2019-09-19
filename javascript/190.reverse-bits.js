/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let str = n.toString(2).split('').reverse()
	let len = str.length
	for(let i = len; i < 32; i++) {
		str.push('0')
	}
	str = str.join('')
	let num = parseInt(str, 2)
	return num
};
module.exports = reverseBits
