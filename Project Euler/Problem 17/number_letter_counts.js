#!/usr/bin/env node

word_map = { 1 : "one", 2 : "two", 3 : "three", 4 : "four", 5 : "five", 6 : "six",
			 7 : "seven", 8 : "eight", 9 : "nine", 10 : "ten" , 11 : "eleven", 12 : "twelve"
			13 : "thirteen", 14 : "fourteen", 15 : "fiften", 16 : "sixteen", 17 : "seventeen",
			18 : "eighteen", 19 :"nineteen", 20 : "twenty", 30 : "thirty", 40 : "forty", 50 : "fifty",
			60 : "sixty", 70 : "seventy", 80 : "eighty", 90 : "ninety", 100 : "hundred", 1000 :"thousand" };

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

