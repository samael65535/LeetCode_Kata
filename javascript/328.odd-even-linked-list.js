/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
	let oddNode = head
	if(head == null)  return null
	let eventHead = head.next
	let evenNode = head.next
	while(evenNode != null) {
		let tmpOddNode = evenNode.next
		if (tmpOddNode) {
			oddNode.next = tmpOddNode
			oddNode = tmpOddNode
			let tmpEvenNode = oddNode.next
			evenNode.next = tmpEvenNode
			evenNode = tmpEvenNode
		} else {
			break;
		}
	}
	oddNode.next = eventHead
	return head
};
module.exports = oddEvenList
