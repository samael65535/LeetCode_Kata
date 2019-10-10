/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	intervals.sort((a, b) => {
		return a[0] - b[0]
	})
	return intervals.reduce((acc, cur) => {
		if(acc.length == 0) {
			acc.push(cur)
		} else {
			let last = acc[acc.length - 1]

			if(last[1] >= cur[0]) {
				if(cur[1] <= last[1]) {
					return acc
				} else {
					last[1] = cur[1]
				}
			} else {
				acc.push(cur)
			}
		}
		return acc
	}, [])
};

console.log(merge( [[1,3],[2,6],[8,10],[15,18]]))
console.log(merge( [[1,3],[4,6]]))
console.log(merge( [[1,3], [3, 4]]))
console.log(merge( [[1,5], [2,4], [3, 4]]))
module.exports = merge
