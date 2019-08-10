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

var mergeTwoLists2 = function (l1, l2) {
	let node1 = l1
	let node2 = l2
	let list = []
	while (node1 != null) {
		list.push(node1)
		node1 = node1.next
	}

	while (node2 != null) {
		list.push(node2)
		node2 = node2.next
	}
	if (list.length == 0) return null
	list.sort((a, b) => {
		return a.val - b.val
	})

	list.map((e, i) => {
		if (list[i + 1])
			e.next = list[i + 1]
		else
			e.next = null
	})
	return list[0]
}

const leetcode = require('./leetcode')
const ListNode = leetcode.List.node
var mergeTwoLists = function (l1, l2) {
	let head = new ListNode(-1)
	let prev = head
	while (l1 != null && l2 != null) {
		if (l1.val > l2.val) {
			prev.next = l2
			l2 = l2.next
		} else {
			prev.next = l1
			l1 = l1.next
		}
		prev = prev.next
	}
	prev.next = l1 == null ? l2 : l1
	return head.next
}

var mergeTwoLists = function (l1, l2) {
	if (l1 == null) return l2
	if (l2 == null) return l1
	if (l1.val>=l2.val) {
		l2.next = mergeTwoLists(l1, l2.next)
		return l2
	}
	if (l1.val<l2.val) {
		l1.next = mergeTwoLists(l1.next, l2)
		return l1
	}
}
