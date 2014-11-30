# Given an array of integers, every element appears twice except for one. Find that single one.
# Note:
# Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 # Solution:
 # 设置一个sum,加加减减出最后一个数
class Solution:
    # @param A, a list of integer
    # @return an integer
    def singleNumber(self, A):
        dict1 = {};
        for num in A:
            if num in dict1:
                dict1.pop(num, "not found")
            else:
                dict1[num] = 1
        return dict1.keys()[0]
