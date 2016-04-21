/**
 * Created by samael on 4/17/16.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var leetcode = require('./leetcode');
var inorderTraversal = function(root) {
    var ret = [];
    var queue = [];
    var r = root;
    while(queue.length > 0 || r) {
        if (!r) {
            r = queue.pop();
            ret.push(r.val);
            r = r.right;
        } else {
            queue.push(r);
            r = r.left;
        }
    }
    return ret;
};
var root = leetcode.Tree.create([1,2,3]);
console.log(inorderTraversal(root));
