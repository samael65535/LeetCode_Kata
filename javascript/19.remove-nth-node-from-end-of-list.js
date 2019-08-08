/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	let node = head
	let list = []
	let l = 0
	while(node != null){
		list.push(node)
		l++
		node = node.next
	}
	if(l==n) {
		let prevRemovedNode = null
		let removedNode = list[0]
		removedNode.next = null
		return list[1] || null
	}
	let prevRemovedNode = list[l-n-1]
	let removedNode = list[l-n]

	prevRemovedNode.next = removedNode.next
	return head
};
