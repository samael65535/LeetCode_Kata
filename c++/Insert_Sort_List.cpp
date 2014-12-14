/**
	 * Definition for singly-linked list.
	 * struct ListNode {
	 *     int val;
	 *     ListNode *next;
	 *     ListNode(int x) : val(x), next(NULL) {}
	 * };
	 */
#include <iostream>
struct ListNode {
	 int val;
	 ListNode *next;
	 ListNode(int x) : val(x), next(NULL) {}
};


class Solution {
public:
	ListNode *insertionSortList(ListNode *head) {
		if (head == NULL) return head;
		ListNode *newHead = new ListNode(0);
		newHead -> next = head;
		ListNode *curr = head;
		while(curr -> next != NULL) {
			if (curr -> next -> val < curr -> val)  {
				ListNode *pre = newHead;
				while(pre -> next -> val < curr -> next -> val) pre = pre -> next;
				ListNode *tmp = curr -> next;
				curr -> next = tmp -> next;
				tmp -> next = pre -> next;
				pre -> next = tmp;
			} else {
			  curr = curr -> next;
			}
		}
		return newHead -> next;
	}
};

int main() {
	Solution s;
	ListNode* l = new ListNode(1);
	s.insertionSortList(l);
	return 0;
}
