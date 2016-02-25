/**
 * Created by samael on 2/25/16.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var leetcode = require('./leetcode');

var deleteNode = function(node) {
    if (node === null) return;
    node.val = node.next.val;
    node.next = node.next.next;
};
var root = leetcode.List.create([1,2]);