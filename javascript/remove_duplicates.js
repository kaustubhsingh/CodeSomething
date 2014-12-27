#!/usr/bin/env node

var arr = [2, 33, 44, 44, 5, 5, 7, 9];



function remove_duplicates(x)
{
	
	var arr2 = new Array(100);

	for (var z = 0; z < arr2.length; ++z)
		arr2[z] = 0;
		
		
	var arr3 = [];

	// console.log(x.length);

	for (var i = 0; i < x.length; ++i)
	{
		// console.log(x[i]);
		
		if (arr2[x[i]] == 0)
		{
			// console.log("set to 1");
			arr2[x[i]] = 1;
		}
		
	}
	
	for (var j = 0; j < 100; ++j)
	{
		if (arr2[j] == 1)
		{
			arr3.push(j);
			// console.log(j);
		}
	}
	
	return arr3;
}

console.log("Original array: \n" + arr);
console.log(remove_duplicates(arr));
