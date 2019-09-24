/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function(l1, l2) {
	let carry = 0
	let node = new ListNode(0)
	let head = node
	while(l1 != null || l2 != null) {
		// 计算
		let n1 = l1 ? l1.val : 0;
		let n2 = l2 ? l2.val : 0;
		let n3 = (n1 + n2 + carry) % 10
		node.val = n3
		carry = parseInt((n1 + n2 + carry) / 10)

		// 移动
		if(l1 != null)
			l1 = l1.next
		if(l2 != null)
			l2 = l2.next

		if(l1 != null || l2 != null) {
			node.next = new ListNode(0)
			node = node.next
		}
	}
	if(carry != 0) {
		node.next = new ListNode(carry)
	}
	return head
};
module.exports = addTwoNumbers
