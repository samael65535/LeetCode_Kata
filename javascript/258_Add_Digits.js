/**
 * Created by samael on 2/23/16.
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var numStr = 0;
    while(num >= 10) {
        numStr = num.toString();
        var sumDigits = 0;
        for (var i = 0; i < numStr.length; i++) {
            sumDigits += parseInt(numStr[i]);
        }
        num = sumDigits;
    }
    return num;
};

console.log(addDigits(10));
console.log(addDigits(38));