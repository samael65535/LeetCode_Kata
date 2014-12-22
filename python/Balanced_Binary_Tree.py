# Given a binary tree, determine if it is height-balanced.

# For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.


# Definition for a  binary tree node
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    # @param root, a tree node
    # @return a boolean
    def isBalanced(self, root):
        if root is None:
            return True
        if abs(self.depth(root.right) - self.depth(root.left)) > 1:
            return False
        return self.isBalanced(root.left) and self.isBalanced(root.right)

    def depth(self, root):
        if root is None:
            return 0
        leftDepth = self.depth(root.left)
        rightDepth = self.depth(root.right)
        return 1 + max(leftDepth, rightDepth)

if __name__ == "__main__" :
    root = TreeNode(1)
    root.left = TreeNode(1)
    root.right = TreeNode(1)
    s = Solution()
    print s.isBalanced(root)
    print "hello"
