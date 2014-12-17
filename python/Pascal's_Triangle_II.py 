# Given an index k, return the kth row of the Pascal's triangle.

# For example, given k = 3,
# Return [1,3,3,1].

# Note:
# Could you optimize your algorithm to use only O(k) extra space?

# Show Tags
class Solution:
    # @return a list of integers
    def getRow(self, rowIndex):
        if rowIndex == 0:
            return [1]
        prevRow = [1]
        currentRow = []
        for count in range(0, rowIndex + 1):
            for i in range(0, len(prevRow)):
                a = b = 0;
                a = prevRow[i]
                if i - 1 < 0:
                    b = 0
                else:
                    b = prevRow[i - 1]
                currentRow.insert(i, a + b)
                prevRow = currentRow
                currentRow = [1]
        return prevRow
if __name__ == "__main__":
    s = Solution()
    print s.getRow(1)
