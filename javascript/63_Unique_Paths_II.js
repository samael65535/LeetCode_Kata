/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function(obstacleGrid) {
	if (obstacleGrid[0][0]) return 0;
	var dp = [];
	for (var i = 0; i < obstacleGrid.length; i++) {
		dp[i] = new Array(obstacleGrid[i].length);
		for (var j = 0; j < obstacleGrid[i].length; j++) {
			if (i == 0 && j == 0) {
				dp[0][0] = 1
			} else if (obstacleGrid[i][j] == 1) {
				dp[i][j] = 0;
			} else {
				if (i == 0) {
					dp[i][j] = dp[i][j-1] 
				} else if (j == 0) {
					dp[i][j] = dp[i-1][j]
				} else {
					dp[i][j] = dp[i-1][j]+ dp[i][j-1];
				}
			}
		}
	}
	return dp[i-1][j-1]
};

uniquePathsWithObstacles([
	[1]
]);