var list = [8, 7, 6, 5, 4, 3, 2, 1];

var sort = function(list) {
	
	len = list.length; 
	comparisons = 0, swaps = 0;
	
	for (i = 0; i < len; ++i)
	{
		for (j = 0; j < len - i - 1; ++j)
		{
			comparisons++;
				if (list[j] > list[j + 1])
				{
					swap = list[j];
					list[j] = list[j + 1]; 
					list[j + 1] = swap;
					swaps++;
				}
			
		};
		
	};
	
	console.log("Comparisons: ", comparisons);
	console.log("Swaps: " + swaps);
	return list;
};

console.log(list);

var sortedlist = sort(list);

console.log(sortedlist);
