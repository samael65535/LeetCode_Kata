/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
	var dp = [];
	for (var i = 0; i < n; i++) {
		dp[i] = 1;
	}
	for (var i = 1; i<m; i++) {
		for (var j = 1; j<n; j++) {
			dp[j] = dp[j-1] + dp[j];			
		}
	}
	return dp[n-1];
};

