/**
 * Created by samael on 3/14/16.
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length <= 1) return false;
    var dic = {};
    var iterator = nums.entries();
    var n = iterator.next();
    while(n.done === false) {
        var key = n.value[1];
        if (dic[key] !== undefined) {
            return true;
        }
        dic[key] = 1;
        n = iterator.next();
    }
    return false
};

console.log(containsDuplicate([1,3,3,5,5,6]));
console.log(containsDuplicate([1,1]));
