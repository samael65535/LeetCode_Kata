/**
 * Created by samael on 3/6/16.
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var num = 0;
    for (var i = s.length - 1; i >=0; i--) {
        var code = s.charCodeAt(i) - 64;
        num = num + code * Math.pow(26, s.length - 1 - i);
    }
    return num;
};
console.log(titleToNumber("AA"));