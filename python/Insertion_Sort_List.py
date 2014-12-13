import random
import math
# Definition for singly-linked list.
class ListNode:
        def __init__(self, x):
                self.val = x
                self.next = None

class Solution:
        # @param head, a ListNode
        # @return a ListNode
        def insertionSortList(self, head):
                if head is None:
                        return head
                newHead = ListNode(0)
                newHead.next = head
                curr = head
                while curr.next:
                        if curr.next.val < curr.val:
                                pre = newHead
                                while pre.next.val < curr.next.val:
                                        pre = pre.next
                                tmp = curr.next
                                curr.next = tmp.next
                                tmp.next = pre.next
                                pre.next = tmp
                        else:
                                curr = curr.next
                return newHead.next

if __name__ == "__main__":
        s = Solution()
        head = ListNode(math.ceil(random.random() * 100))
        nowNode = head
        print nowNode.val,
        for i in range(0, 20):
                nowNode.next = ListNode(math.ceil(random.random() * 100))
#		nowNode.next = ListNode(i)
                nowNode = nowNode.next
                print nowNode.val,
        print
        print "after"
        a = []
        head = s.insertionSortList(head)
        while head is not None:
                print head.val,
                head = head.next
        print
        print "ok"
