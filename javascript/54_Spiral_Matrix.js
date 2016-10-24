/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
	if (matrix[0] === undefined) return []
	var ret = [];
	var elementCount = matrix[0].length * matrix.length;
	
	while (ret.length < elementCount){
		var t = matrix.shift();

		if (t) ret = ret.concat(t); // left

		for(var i = 0; i < matrix.length; i++) { // down
			t = matrix[i].pop;
			if(t) ret.push(matrix[i].pop());
		}

		t = matrix.pop(); // right
		if (t) ret = ret.concat(t.reverse());

		for (var i = matrix.length-1; i>=0; i--) { // up
			t = matrix[i].shift();
			if(t) ret.push(t);
		}
	}
	return ret;
	
};
