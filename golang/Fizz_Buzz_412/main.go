package main

import (
	"strconv"
	"fmt"
)

func fizzBuzz(n int) []string {
	res := []string{}
	for i := 1; i <= n; i++ {
		a := ""

		if i%5 != 0 && i%3 != 0 {
			a = strconv.FormatInt(int64(i), 10)
		} else {
			if i%3 == 0 {
				a = "Fizz"
			}
			if i%5 == 0 {
				a = a + "Buzz"
			}
		}
		res = append(res, a)
	}
	return res
}

func main() {
	fmt.Println(fizzBuzz(15))
}
