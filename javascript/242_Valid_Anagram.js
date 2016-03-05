/**
 * Created by samael on 3/4/16.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var s1  = s.split("").sort();
    var s2  = t.split("").sort();
    var length = s.length;
    if (t.length !== s.length) return false;
    for (var i = 0; i < length; i++) {
        if (s2[i] !== s1[i]) return false
    }
    return true
};

console.log(isAnagram("rat", "cat"))