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

