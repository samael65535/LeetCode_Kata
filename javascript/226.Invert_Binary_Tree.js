/**
 * Definition for a binary tree node.
 */

var leetcode = require('./leetcode');
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return root;
    else {
        var t = root.left;
        root.left = root.right;
        root.right = t;
        invertTree(root.left);
        invertTree(root.right);
        return root;
    }
};
var root = leetcode.Tree.create([1,2,3,4,5,6]);
console.log(invertTree(root));