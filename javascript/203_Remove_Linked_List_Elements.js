/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var leetcode = require("./leetcode");
var removeElements = function(head, val) {
	while(head != null && head.val == val) {
		head = head.next;		
	}
	if (head == null) {
		return null;
	}
	var node = head.next;
	var last = head;
	while(node != null) {
		if(node.val == val) {
			last.next = node.next;
		} else {
			last = node;
		}
		node = node.next
	}

	return head;
};
//console.log(leetcode);
var list = leetcode.List.create([6,1])

console.log(leetcode.List.toArray(removeElements(list, 6)));