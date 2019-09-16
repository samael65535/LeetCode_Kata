/**
 * initialize your data structure here.
 */
var MinStack = function() {
	this._stack = []
	this._minStack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
	if(this._minStack.length == 0) {
		this._minStack.push(x)
	} else {
		let topNum = this._minStack[this._minStack.length - 1]
		if(topNum >= x){
			this._minStack.push(x)
		}
	}
	this._stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	let num = this._stack.pop()
	let topNum = this._minStack[this._minStack.length - 1]
	if(topNum == num){
		this._minStack.pop()
	}
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this._stack[this._stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
	return this._minStack[this._minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

