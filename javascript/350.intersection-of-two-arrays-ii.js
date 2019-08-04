/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
	let hash = {}
	hash = _.countBy(nums1)
	let ans = []
	nums2.forEach((i)=>{
		if(hash[i]){
			hash[i]--
			ans.push(i)
		}
	})
	return ans
};
