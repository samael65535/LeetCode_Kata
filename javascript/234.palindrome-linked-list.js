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


var isPalindrome = function (head) {
	if (head == null) return true
	let pointTail = head
	while (pointTail.next != null) {
		let tmp = pointTail.next
		if (tmp)
			tmp.prev = pointTail
		pointTail = tmp
	}

	let pointHead = head
	while (pointHead != null && pointTail != null) {
		if(pointHead.val != pointTail.val) return false
		pointHead = pointHead.next
		pointTail = pointTail.prev
	}
	return true
};


// const leetcode = require('./leetcode')
// console.log(isPalindrome(leetcode.List.create([1,1,2,1])))
