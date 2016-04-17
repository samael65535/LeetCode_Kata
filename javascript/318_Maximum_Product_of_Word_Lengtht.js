/**
 * Created by samael on 4/12/16.
 */
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    var hash = [];
    for (var i=0; i<words.length; i++){
        var word = words[i];
        var val = 0;
        for(var j = 0; j < word.length; j++){
            val |= (1 << (word.charCodeAt(j) - "a".charCodeAt(0)));
        }
        hash.push(val);
    }
    var max = 0;
    for (var i=0; i<words.length; i++) {
        for (var j=i+1; j<words.length; j++) {
            if ((hash[i] & hash[j]) == 0) {
                var p = words[i].length * words[j].length;
                if (max < p) max = p;invertTree()
            }
        }
    }
    return max;
};

maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]);
