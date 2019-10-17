/**
 * @param {number} capacity
 */
class Node {
	constructor(key, val) {
		this.key = key || null
		this.val = val || null
		this.prev = null
		this.next = null
	}
}

var LRUCache = function (capacity) {
	this._cache = {}
	this._size = 0
	this._limit = capacity
	this.head = new Node()
	this.tail = new Node()
	this.head.next = this.tail
	this.tail.prev = this.head
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
	if (!this._cache[key]) {
		//console.log(-1)
		return -1
	}
	this.refresh(key)
	//console.log(this._cache[key].val)
	return this._cache[key].val
};

// 刷新对应的key
LRUCache.prototype.refresh = function (key) {
	let node = this._cache[key]
	if (node.next != null && node.prev != null) {
		// 如果在链表中
		// 把删当前节点的
		node.prev.next = node.next
		node.next.prev = node.prev
	}
	// 把节点放到链表尾
	let prevNode = this.tail.prev
	this.tail.prev = node
	node.next = this.tail
	node.prev = prevNode
	prevNode.next = node


}

// 清理最近没有的key清理头部的node
LRUCache.prototype.cleanUnused = function () {
	let node = this.head.next
	if (node.key) {
		this.head.next = node.next
		this.head.next.prev = node.prev
		this._size--
		delete this._cache[node.key]
	}
}
/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
	if (this._cache[key]) {
		this._cache[key].val = value
		this.refresh(key)
	} else {
		if (this._size == this._limit) {
			this.cleanUnused()
		}
		let node = new Node(key, value)
		this._cache[key] = node
		this.refresh(key)
		this._size++

	}
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// var cache = new LRUCache(2 /* 缓存容量 */);
//
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // 返回  1
// cache.put(3, 3);    // 该操作会使得密钥 2 作废
// cache.get(2);       // 返回 -1 (未找到)
// cache.put(4, 4);    // 该操作会使得密钥 1 作废
// cache.get(1);       // 返回 -1 (未找到)
// cache.get(3);       // 返回  3
// cache.get(4);       // 返回  4

// var cache = new LRUCache(2 /* 缓存容量 */);
//
// cache.put(2, 1);
// cache.put(2, 2);
// console.log(cache.get(2));       // 返回  2
// cache.put(1, 1);
// cache.put(4, 1);
// console.log(cache.get(2));

// var cache = new LRUCache( 2 /* 缓存容量 */ );
//
// let oper = ["get","put","get","put","put","get","get"]
// let args = [[2],  [2,6],[1],  [1,5],[1,2],[1],  [2]]
// for(let i = 0; i < oper.length; i++) {
// 	cache[oper[i]](...args[i])
// }
// var cache = new LRUCache(3 /* 缓存容量 */);
//
// let oper = ["put", "put", "put", "put", "get", "get", "get", "get", "put", "get", "get", "get", "get", "get"]
// let args = [[1, 1], [2, 2], [3, 3], [4, 4], [4], [3], [2], [1], [5, 5], [1], [2], [3], [4], [5]]
// for (let i = 0; i < oper.length; i++) {
// 	console.log(oper[i], args[i], cache[oper[i]](...args[i]))
//
// }


// let oper = ["put", "put", "put", "put", "get", "get", "get", "get", "put", "get", "get", "get", "get", "get"]
// let args = [[1, 1], [2, 2], [3, 3], [4, 4], [4], [3], [2], [1], [5, 5], [1], [2], [3], [4], [5]]
// var cache = new LRUCache(3 /* 缓存容量 */);
// for (let i = 0; i < oper.length; i++) {
// 	console.log(oper[i], args[i], cache[oper[i]](...args[i]))
//
// }
