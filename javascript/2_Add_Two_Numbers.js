/**
 * Definition for singly-linked list.

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var List = require('./leetcode').List;
var addTwoNumbers = function(l1, l2) {
	var node = l1;
	var s1 = "";
	while(node != null) {
		s1 += node.val;
		node = node.next;
	}
	
	var node = l2;
	var s2 = "";
	while(node != null) {
		s2 += node.val;
		node = node.next
	}
	var len = Math.max(s1.length, s2.length);
	var a, b, c=0;
	var head, node;
	for(var i = 0; i < len; i++) {
		a = parseInt(s1[i]) || 0;
		b = parseInt(s2[i]) || 0;
		if (node == undefined) {
			node = new ListNode((a + b + c) % 10);
			head = node;
		} else {
            node.next = new ListNode((a + b + c) % 10);
            node = node.next;
		}
        node.next = null;
		c = parseInt((a + b + c) / 10);
	}
    if (c != 0) {
        node.next = new ListNode(c);
        node = node.next;
        node.next = null;
    }
    return head;
};

console.log(List.toArray(addTwoNumbers(List.create([5]), List.create([5]))));