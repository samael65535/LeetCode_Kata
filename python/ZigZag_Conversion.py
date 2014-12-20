# The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

# P   A   H   N
# A P L S I I G
# Y   I   R
# And then read line by line: "PAHNAPLSIIGYIR"
# Write the code that will take a string and make this conversion given a number of rows:

# string convert(string text, int nRows);
# convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

class Solution:
        # @return a string
        def convert(self, s, nRows):
                res = ""
                if len(s) <= nRows or nRows == 1:
                        return s
                for r in range(nRows):
                        for k in range(len(s) / nRows + 1):
                                a = (r + 2 * (nRows - 1) * k)
                                if a < len(s):
                                        res += s[a]
                                else:
                                        break
                                b = a + (nRows - (r+1)) * 2;
                                if b < len(s) and r != 0 and r != nRows - 1:
                                        res += s[b]
                                if b >= len(s):
                                        break
                return res;


if __name__ == "__main__":
        s = Solution()
        r = s.convert("twckwuyvbihajbmhmodminftgpdcbquupwflqfiunpuwtigfwjtgzzcfofjpydjnzqysvgmiyifrrlwpwpyvqadefmvfshsrxsltbxbziiqbvosufqpwsucyjyfbhauesgzvfdwnloojejdkzugsrksakzbrzxwudxpjaoyocpxhycrxwzrpllpwlsnkqlevjwejkfxmuwvsyopxpjmbuexfwksoywkhsqqevqtpoohpd", 4)
        print r
