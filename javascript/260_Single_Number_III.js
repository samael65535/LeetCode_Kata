/**
 * Created by samael on 3/3/16.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var dictNums = {};
    for(var i = 0; i < nums.length; i++) {
        if (dictNums[nums[i]] === undefined) {
            dictNums[[nums[i]]] = 1;
        } else {
            delete dictNums[[nums[i]]]
        }

    }
    var ret =[];
    for(var key in dictNums) {
        ret.push(parseInt(key));
    }
    return ret
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));