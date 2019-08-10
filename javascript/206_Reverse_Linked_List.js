/**
 * Created by samael on 4/23/16.
 */

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
var leetcode = require('./leetcode');
var reverseList = function(head) {
    if (head === null) return head;
    var prev = null;
    var current = head;
    while(current) {
        var tmp = current.next;
        current.next = prev;
        prev = current;
        current = tmp;
    }
    return prev;
};
var root = leetcode.List.create([1]);
var ret = reverseList(root);
console.log(leetcode.List.toArray(ret));
