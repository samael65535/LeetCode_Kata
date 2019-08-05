/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let l = s.length
	let t;
	for (let i = 0; i < l/2 ; i++){
		t = s[i]
		s[i] = s[l-i-1]
		s[l-i-1] = t
	}
};

var reverseString = function(s) {
	s.reverse()
};



reverseString(["h","e","l","l","o"])
reverseString(["o"])
reverseString(["h","e","l","l","o"])
