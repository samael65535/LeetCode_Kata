/**
 * Created by samael on 4/5/16.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return (nums.length) * (nums.length+1) / 2 - sum;
};

console.log(missingNumber([0]));