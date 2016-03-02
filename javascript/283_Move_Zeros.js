/**
 * Created by samael on 3/2/16.
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var nonZeroCount = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[nonZeroCount] = nums[i];
            nonZeroCount++;
        }
    }
    for (var i = nonZeroCount; i < nums.length; i++) {
        nums[i] = 0;
    }
};

console.log(moveZeroes([4]));