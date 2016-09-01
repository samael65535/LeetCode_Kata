/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	a = a.split("").reverse();
	b = b.split("").reverse();
	var carry = 0;
	var c = [];
	for (var i = 0, m = Math.max(a.length, b.length); i < m; i++) {
		var current = parseInt(b[i] || 0) + parseInt(a[i] || 0) + carry;
		if (current > 1) {
			carry = 1;
			current -= 2;
		} else {
			carry = 0;
		}
		c.push(current);
	}
	c.push(carry);
	c.reverse();
	while(c[0] == "0" && c.length > 1) c.shift();
	return c.join("");
};

console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"));
//console.log(b)