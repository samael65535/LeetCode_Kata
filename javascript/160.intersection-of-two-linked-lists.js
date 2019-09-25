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


var getIntersectionNode2 = function(headA, headB) {
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

var getIntersectionNode3 = function(headA, headB) {
	let nodeA = headA
	if(nodeA == null) return null
	let nodeB = headB
	if(nodeB == null) return null
	while(nodeA) {
		nodeA.flag = 1
		nodeA = nodeA.next
	}
	while(nodeB) {
		if(nodeB.flag == 1) {
			return nodeB
		}
		nodeB = nodeB.next
	}
	return null
};

var getIntersectionNode = function(headA, headB) {
	var pA = headA;
	var pB = headB;
	while(pA !== pB){
		pB = pB? pB.next: headA;
		pA = pA? pA.next: headB;
	}
	return pA;
}

module.exports = getIntersectionNode
