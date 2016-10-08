/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
	var arr1 = num1.split('').reverse();
	var arr2 = num2.split('').reverse();	
    if (num1 == 0 || num2 == 0) return "0";
    var len1 = arr1.length;
    var len2 = arr2.length
    var result = new Array(len1 + len2);
    var carry = 0;
    var val = 0;
    for (i = 0; i < len1 + len2; i++) {
        result[i] = 0;
    }
    for (var i = 0; i < len1; i++) {
        val = parseInt(arr1[i]);
        carry = 0;
        for (var j = 0; j < len2; j++) {
            carry += val * parseInt(arr2[j]) + result[i+j];
            result[i+j] = carry % 10;
            carry = parseInt(carry/10);
        }
        if (carry != 0) {
            result[len2+i] = carry;
        }
    }
    result = result.reverse();
    while(result[0] == 0) {
        result.shift();
    }
    
    return result.join('');
};
console.log(multiply("123", "123"));
console.log(multiply("9", "9"));

