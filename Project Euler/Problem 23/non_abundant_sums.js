
var findDivisors = require("./amicable_numbers.js");

// console.log(findDivisors(10));

var isAbundant = function(n)
{
	var divisors = findDivisors(n);
	
	console.log(divisors);
	
	var i, sum = 0;
	for (i in divisors)
	{
		console.log(i);
		sum += divisors[i];
	}
	console.log(sum);
	
	if (sum > n)
		return true;
	else
		return false
}

console.log(isAbundant(10));
