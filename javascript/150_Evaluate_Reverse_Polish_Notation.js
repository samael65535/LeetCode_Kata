/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
	var retStack = [];
	var cur;
	for (var i = 0; i < tokens.length; i++) {
		var cur = parseInt(tokens[i]);
		if (!Number.isNaN(cur)) {
			retStack.push(cur)
		} else {
			var a = retStack.pop();
			var b = retStack.pop();
			var t;
			switch(tokens[i]) {
				case "+":
					t = a + b;
					break;
				case "-":
					t = b - a;
					break;
				case "*":
					t = a * b;
					break;
				case "/":
					t = b / a;
					break;
			}
			retStack.push(parseInt(t));
		}
	}
	return retStack[0]
};
console.log(evalRPN(["18"]));