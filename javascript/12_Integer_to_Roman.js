/**
 * Created by samael on 4/25/16.
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var numToRomanChar = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
     };
    var s = String(num);
    var ret = "";
    var a = 1;
    var ret = [];
    for (var i = s.length-1; i >= 0 ; i--) {
        var ts = ""
        var p = Math.pow(10, (s.length-1)-i);
        var t = s[i];
      
        if (t <= 3) {
           for (var j = 1; j <= t; j++) {
                ts += numToRomanChar[a]
            }
        } else if (t > 3 && t <= 5) {
            for (var j = 1; j <= 5-t; j++) {
                ts += numToRomanChar[a]
           }
           ts += numToRomanChar[5 * a]
        } else if (t > 5 && t <= 8) {
           ts = numToRomanChar[5 * a]
           for (var j = 1; j <= t-5; j++) {
             ts += numToRomanChar[a]
           }
        } else {
            for (var j = 1; j <= 10-t; j++) {
                ts += numToRomanChar[a]
               }
               ts += numToRomanChar[10 * a]
        }
        
        a *= 10;
        ret.unshift(ts)
    }
    return ret.join("");
};
//console.log(intToRoman(8))

