/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
	var dict1 = {};
	var dict2 = {};
	var arr = str.split(' ');
	pattern = pattern.split('');
	if (pattern.length != arr.length) return false;
	for(var i = 0; i < arr.length; i++) {
		if (dict1[pattern[i]] == undefined && dict2[arr[i]] == undefined) {
			dict1[pattern[i]] = arr[i];
			dict2[arr[i]] = pattern[i];
		} else {
			if (dict1[pattern[i]] != arr[i] && dict2[arr[i]] != pattern[i]) return false;
		}
	}
	return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("abba", "dog dog dog dog"));
console.log(wordPattern("jquery", "jquery"));