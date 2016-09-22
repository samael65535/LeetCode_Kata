/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	var counter = {};
	for (var i = 0; i < s.length; i++) {
		if (counter[s[i]] === undefined) 
			counter[s[i]] = [i];
		else 
			counter[s[i]].push(i);
	}
	var ret = [];
	for (var k in s) {
		if (counter[s[k]].length == 1) {
			ret.push(counter[s[k]][0]);
		}
	}
	
	return ret.length>0 ? ret[0] : -1;
};

console.log(firstUniqChar("loveleetcode"));