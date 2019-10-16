/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
	this._set = new Set()
	this._set = {}
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
	if(this._set[val] != undefined) return false
	this._set[val] = val
	return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
	if(this._set[val] == undefined) return false
	delete this._set[val]
	return true
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
	// TODO 这里的时间复杂度不是O(n)
	let keys = Object.keys(this._set)
	let len = keys.length
	if(len == 0) return null
	let idx = parseInt(Math.random() * len )

	return keys[idx]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */



