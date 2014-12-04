# Given two binary trees, write a function to check if they are equal or not.

# Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    # @param p, a tree node
    # @param q, a tree node
    # @return a boolean
    def isSameTree(self, p, q):
        flag = True
        if (p is None) or (q is None):
            return (p is None) and (q is None)
        if p.val == q.val:
            flag = flag and self.isSameTree(p.left, q.left)
            flag = flag and self.isSameTree(p.right, q.right)
        else:
            flag = False
        return flag



# if __name__ == "__main__":
#     tree1 = TreeNode(0)
#     tree2 = TreeNode(0)
#     s = Solution()
#     print s.isSameTree(None, tree2)
