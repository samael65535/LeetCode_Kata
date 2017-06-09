package main

func twoSum(nums []int, target int) []int {
	res := make([]int, 2)
	for i1, n1 := range nums {
		t := target - n1
		for i2, n2 := range nums[i1+1:] {
			if n2 == t {
				res[0] = i1
				res[1] = i2 + i1 + 1
				return res
			}
		}
	}

	return res
}
