/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var numStr = x.toString();
    var max = Math.pow(2,31) - 1;
    var min = -Math.pow(2,31);
    var ret;
    if (numStr[0] == "-") {
        ret = parseInt("-" + numStr.split('').splice(1).reverse().join(''));
    } else {
        ret = parseInt(numStr.split('').splice(0).reverse().join(''));
    }
    return (ret > max || ret < min) ? 0 : ret;
};
console.log(reverse(-2147483648));