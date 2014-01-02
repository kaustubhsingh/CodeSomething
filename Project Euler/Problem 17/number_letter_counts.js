#!/usr/bin/env node

word_map = { 1 : "one", 2 : "two", 3 : "three", 4 : "four", 5 : "five", 6 : "six",
				7 : "seven", 8 : "eight", 9 : "nine" };

// console.log(word_map['5']);

function extract_digits(n)
{
	var digits = [];
	
	while (n > 0)
	{
		digits.unshift(n % 10);
		n = Math.floor(n / 10);
	}
	return digits;
}

console.log(extract_digits(324));

