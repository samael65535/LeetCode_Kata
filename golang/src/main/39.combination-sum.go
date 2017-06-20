package main

import (
	"sort"
)

func combinationSum(candidates []int, target int) [][]int {
	res := []([]int){}
	stack := []int{}
	sort.Ints(candidates)
	backtrace(candidates, target, &res, stack)
	return res
}

func backtrace(candidates []int, target int, res *[][]int, stack []int) {
	if target == 0 {
		tmp := make([]int, len(stack))
		copy(tmp, stack)
		*res = append(*res, tmp)
	} else {
		for i, n := range candidates {
			if i > 0 && candidates[i-1] == n {
				continue
			}
			if target >= n {
				stack = append(stack, n)
				backtrace(candidates[i:], target-n, res, stack)
				stack = stack[:len(stack)-1]
			}

		}
	}

}

func combinationSum2(candidates []int, target int) [][]int {
	sort.Ints(candidates)
	dp := [][][]int{}
	for i := 1; i <= target; i++ {
		list := [][]int{}
		for j := 0; j < len(candidates) && candidates[j] <= i; j++ {
			if i == candidates[j] {
				list = append(list, []int{candidates[j]})
			} else {
				for _, l := range dp[i-candidates[j]-1] {
					if candidates[j] < l[0] {
						cl := []int{}
						cl = append(cl, candidates[j])
						cl = append(cl, l...)
						list = append(list, cl)
					}
				}
			}
		}
		dp = append(dp, list)
	}
	return dp[target-1]
}
