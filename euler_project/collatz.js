var start_time = (new Date()).getTime();

var maxCount = 0;
var optimal_n = 0;
var optimal_arr = [];

for (n = 1; n <= 1000000; ++n)
{
	//console.log("n = %d", n);
	var x = n, count = 0, arr = [];
	
	while (x > 0)
	{	
		arr.push(x);
		
		if (x == 1) break;
			
		if (x % 2 == 0)
		{
			x = x / 2;
		}
		else
		{
			x = 3 * x + 1;
		}
		count++;
	}
	//console.log(x);
	
	if (maxCount < count)
	{
		maxCount = count;
		optimal_n = n;
		optimal_arr = arr.slice(0);
	}
}

console.log("The longest sequence belongs to %d", optimal_n);
console.log("The number of elements in the longest sequence are %d ", optimal_arr.length);

var end_time = (new Date()).getTime();
console.log("Total time taken in ms: %d", end_time - start_time);
