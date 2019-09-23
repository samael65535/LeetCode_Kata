/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
	let hash = {}
	strs.forEach((word) => {
		let key = word.split('').sort().join();
		if(!hash[key]) hash[key] = []
		hash[key].push(word)

	})
	return Object.values(hash)
};
module.exports = groupAnagrams
