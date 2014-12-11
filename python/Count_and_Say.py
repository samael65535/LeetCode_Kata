# The count-and-say sequence is the sequence of integers beginning as follows:
# 1, 11, 21, 1211, 111221, ...

# 1 is read off as "one 1" or 11.
# 11 is read off as "two 1s" or 21.
# 21 is read off as "one 2, then one 1" or 1211.
# Given an integer n, generate the nth sequence.

# Note: The sequence of integers will be represented as a string.

class Solution:
    # @return a string
    def countAndSay(self, n):
        if n == 0:
            return ''
        beginStr = '1'
        for i in range(1, n):
            tmpStr = ''
            count = 1
            for j in range(0, len(beginStr) - 1):
                if beginStr[j] != beginStr[j+1]:
                    tmpStr = tmpStr + str(count) + beginStr[j]
                    count = 1
                else:
                    count += 1
            tmpStr = tmpStr + str(count) + beginStr[len(beginStr) - 1]
            beginStr = tmpStr;
        return beginStr;


if __name__ == "__main__":
        s = Solution()
        print s.countAndSay(4)
