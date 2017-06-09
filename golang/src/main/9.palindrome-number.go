package main

import "strconv"

func isPalindrome(x int) bool {
	if x < 0 {
		x = -x
	}
	s := strconv.FormatInt(int64(x), 10)
	l := len(s) - 1
	for i, c := range s {
		if rune(s[l-i]) != c {
			return false
		}
	}
	return true
}
