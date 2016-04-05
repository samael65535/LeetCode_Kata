/**
 * Created by samael on 4/5/16.
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
var preorderTraversal = function(root) {
    var ret = [];
    var queue = [];
    queue.push(root);
    while(queue.length > 0 && root !== null) {
        var r = queue.pop();
        ret.push(r.val);
        if (r.right) {
            queue.push(r.right);
        }
        if (r.left) {
            queue.push(r.left);
        }

    }
    return ret;
};
var root = leetcode.Tree.create([1,2,3,4,5,6]);
console.log(preorderTraversal(root));
