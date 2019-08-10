/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let node = head
	if(node == null) return false
	while(1) {
    	if (node.next == null) return false
		else {
		    if (node.hasReaded) return true
		    else {
		    	node.hasReaded = true
			    node = node.next
		    }
	    }
	}
};

// let leetcode = require('./leetcode')
// console.log(hasCycle(leetcode.List.create([])))
