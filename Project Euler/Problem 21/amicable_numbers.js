#!/usr/bin/env node

function findDivisors(n)
{
	var divisors = [];
	
	for (var i = 0; i <= n/2; i++)
	{
		if (n % i == 0)
		{
			divisors.push(i);
		}
	}
	return divisors;
}

function d(n)
{
	var divisors = findDivisors(n);
	var sum = 0;
	
	for (var i = 0; i < divisors.length; ++i)
		sum += divisors[i]
		
	return sum;
}

console.log(findDivisors(15))
console.log(d(15))
