/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */


var getIntersectionNode = function(headA, headB) {
	let nodeA = headA
	if(nodeA == null) return null
	let nodeB = headB
	if(nodeB == null) return null
	while(nodeA){
		nodeB = headB
		while(nodeB) {
			if (nodeA == nodeB) return nodeA
			nodeB = nodeB.next
		}

		nodeA = nodeA.next
	}
	return null
};

module.exports = getIntersectionNode
