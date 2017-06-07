package main

import (
	"testing"
)

type Item struct {
	want bool
	num  int
}

var itemTable []Item = []Item{
	{
		false,
		-2147447412,
	},
	{
		false,
		11333,
	},
	{
		true,
		-11,
	},
	{
		true,
		11,
	},
	{
		true,
		0,
	},
	{
		true,
		11,
	},
}

func TestIsPalindrome(t *testing.T) {
	for _, e := range itemTable {
		if isPalindrome(e.num) != e.want {
			t.Error("error")
		}
	}
}
