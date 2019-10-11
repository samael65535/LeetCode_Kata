/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
	if (n == 1) return [[1]];
	var ret = new Array(n);
	var currentDirection = 0;
	for (var i = 0; i < n; i++) {
		ret[i] = new Array(n);
		for (var j = 0; j < n; j++) {
			ret[i][j] = 0;
		}
	}

	var i = 0, j = 0, val = 1;
	while (val <= n * n) {

		while (ret[i][j] == 0 && j < n) { // right
			ret[i][j++] = val++;
		}
		i += 1;
		j -= 1;
		while (i < n && ret[i][j] == 0) { // down
			ret[i++][j] = val++;
		}

		j -= 1;
		i -= 1;
		while (j >= 0 && ret[i][j] == 0) { // left
			ret[i][j--] = val++;
		}

		i -= 1;
		j += 1;
		while (j <= n && ret[i][j] == 0) { // up
			ret[i--][j] = val++;
		}
		i += 1;
		j += 1;
	}
	return ret;
};
generateMatrix(1);
