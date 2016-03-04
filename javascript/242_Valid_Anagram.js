/**
 * Created by samael on 3/4/16.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var s1  = s.split("").sort(function(a, b) {
        return a > b;
    }).toString();
    var s2  = t.split("").sort(function(a, b) {
        return a > b;
    }).toString();
    return s1 === s2;
};