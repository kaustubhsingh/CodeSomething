
var findDivisors = require("./amicable_numbers.js");

// console.log(findDivisors(10));

var isAbundant = function(n)
{
	var divisors = findDivisors(n);
	
	console.log(divisors);
	
	var i, sum = 0;
	for (i in divisors)
	{
		sum += divisors[i];
	}
	console.log(sum);
	
	if (sum > n)
		return true;
	else
		return false
}

function printAbundantStatus(n)
{
	for (var i = 1; i <= n; ++i)
	{
		console.log("%d %s", i, isAbundant(12));
	}
}

printAbundantStatus(15);



