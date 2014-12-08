# Given a binary tree, find its maximum depth.
# The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
# Definition for a  binary tree node
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    # @param root, a tree node
    # @return an integer
    def maxDepth(self, root):
        if root is None:
            return 0
        L = 0;
        R = 0;
        if not (root.left is None):
            L = self.maxDepth(root.left)
        if not (root.right is None):
            R = self.maxDepth(root.right)
        return (L + 1) if L > R else (R + 1)


# if __name__ == "__main__" :
#     root = TreeNode(1)
#     root.left = TreeNode(1)
#     root.right = TreeNode(1)
#     s = Solution()
#     print s.maxDepth(root)
#     print "hello"
