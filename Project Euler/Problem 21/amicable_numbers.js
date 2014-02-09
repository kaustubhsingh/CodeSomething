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

function AmicableNumbers()
{
	var dir = {}, amicable = [], d_fn = [], index;
	
	for (var i = 0; i < 1000; ++i)
	{
		dir[i + 1] = d(i + 1);
		
		index = d_fn.indexOf(i + 1);
		
		if (index != -1 && index == dir[i +  1])
		{
			amicable.push(dir[i + 1]);
		}
		d_fn.push(dir[i + 1]);
		
	}
	
	return amicable;
}

console.log(findDivisors(150))
console.log(d(150))
console.log(AmicableNumbers())
