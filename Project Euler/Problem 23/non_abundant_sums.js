
var findDivisors = require("./amicable_numbers.js");

console.log(findDivisors(10));

var isAbundant = function(n)
{
	var divisors = findDivisors(n);
	
	sum = 0;
	for i in divisors
	{
		sum += i;
	}
	if (sum > n)
		return true;
	else
		return false
}

console.log(isAbundant(10));
