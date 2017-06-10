package main

import "fmt"

func main() {
	res := combinationSum([]int{2, 3, 6, 7}, 7)
	fmt.Println(res)
	fmt.Println(combinationSum([]int{1, 2, 3, 4}, 6))
}
