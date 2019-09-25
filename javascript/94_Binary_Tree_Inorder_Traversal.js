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

var inorderTraversal = function(root) {
    var ret = [];
    var stack = [];
    var r = root;
    while(stack.length > 0 || r) {
        if (!r) {
            r = stack.pop();
            ret.push(r.val);
            r = r.right;
        } else {
            stack.push(r);
            r = r.left;
        }
    }
    return ret;
};
var leetcode = require('./leetcode');
var root = leetcode.Tree.create([1,2,3]);
console.log(inorderTraversal(root));
