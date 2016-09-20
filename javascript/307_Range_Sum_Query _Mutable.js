/**
 * @constructor
 * @param {number[]} nums
 */


var Node = function(start, end) {
	this.start = start;
	this.end = end;
	this.val = null;
	this.left = null;
	this.right = null;
}

var NumArray = function(nums) {
	if (nums.length == 0) return 0;
	this.arr = nums;
	// 构建线段树
	function buildTree(start, end) {
		var node = new Node(start, end);
		if (start == end) {
			node.val = nums[start];
		} else {
			var mid = parseInt((start + end) / 2);
			node.left = buildTree(start, mid);
			node.right = buildTree(mid + 1, end);
			node.val = node.left.val + node.right.val;
		}
		return node;
	}
	this._root = buildTree(0, nums.length-1);
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
	this.arr[i] = val;
	// 更新大小
	function updateTree(node) {
		if (node.start == node.end && node.start == i) {
			node.val = val;
			return val;
		}
		var mid = parseInt((node.start + node.end) / 2)
		if (i <= mid) {
			node.val -= node.left.val;
			node.val += updateTree(node.left);
		} else {
			node.val -= node.right.val;
			node.val += updateTree(node.right);
		}
		return node.val;
	}
	updateTree(this._root);
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
	function calTree(node, start, end) {
		if (node.start == start && node.end == end) {
			return node.val;
		} else  {
			var mid = parseInt((node.start + node.end) / 2);
			var res = 0;
			if (end <= mid) {
				res += calTree(node.left, start, end);
			} else if (start > mid) {
				res += calTree(node.right, start, end);
			} else {
				res += calTree(node.left, start, mid);
				res += calTree(node.right, mid + 1, end);
			}
			return res;
		}
	}
	return calTree(this._root, i, j);
};


var nums = [0,9,5,7,3];
var numArray = new NumArray(nums);
//console.log(numArray.sumRange(0, 1));
//numArray.update(1, 10);
//console.log(numArray.sumRange(0, 2));
numArray.sumRange(4,4);
numArray.sumRange(2,4);
numArray.sumRange(3,3);
numArray.update(4,5);
numArray.update(1,7);
numArray.update(0,8);
numArray.sumRange(1,2);
numArray.update(1,9);
numArray.sumRange(4,4);
numArray.update(3,4)
