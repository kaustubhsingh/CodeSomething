
var findDivisors = require("./amicable_numbers.js");

// console.log(findDivisors(10));

var isAbundant = function(n)
{
	var divisors = findDivisors(n);
	
	// console.log(divisors);
	
	var i, sum = 0;
	for (i in divisors)
	{
		sum += divisors[i];
	}
	// console.log(sum);
	
	if (sum > n)
		return true;
	else
		return false
}

function printAbundantStatus(n)
{
	for (var i = 1; i <= n; ++i)
	{
		console.log("%d %s", i, isAbundant(i));
	}
}

function findAbundantNos(n)
{
	var abundantNos = [];
	
	for (var i = 1; i <=n; ++i)
	{
		if (isAbundant(i))
		{
			abundantNos.push(i);
		}
	}
	return abundantNos;
}

// printAbundantStatus(25);

console.log(findAbundantNos(100));

function isAbundantNosSum_helper(n, lookup)
{
	
	for (var i = 0; i < lookup.length; ++i)
	{
		if (n > lookup[i])
			break;
			
		if (isPresent(n - lookup[i]))
		{
			return true;
		}
	}
	return false;
}

function isAbundantNosSum()
{
	
	var lookup = findAbundantNos(28122);
	var sum = 0;
	
	for (var i = 1; i <= 28122; ++i)
	{
		if (!isAbundantNosSum_helper(i, lookup))
		{
			sum += i;
		}
	}
	return sum;
}
