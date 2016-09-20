/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
	var counter = {};
	var visited = {};
	for(var i = 0; i < s.length; i++) {
		if (counter[s[i]])
			counter[s[i]]++
		else
			counter[s[i]] = 1;
		visited[s[i]] = false;
	}
	var res = [0];
	for(var i = 0; i < s.length; i++) {
		var c = s[i];
		if (counter[c] <= 0) continue;
		counter[c]--;
		if (visited[c]) continue;
		while(res[res.length-1] > c && counter[res[res.length-1]] > 0) {
			visited[res[res.length-1]] = false;
			res.pop();
		}
		visited[c] = true;
		res.push(c);
	}
	return res.splice(1).join('');
};
var str1 = "cbacdcbc"
//var str2 = "f"
//console.log(str1 > str2)
//console.log('d'.charCodeAt(0));
console.log(removeDuplicateLetters(str1));