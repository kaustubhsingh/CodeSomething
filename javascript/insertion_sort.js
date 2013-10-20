var list = [3, 5, 1, 45, 6, 87, 23, 19]

function insertion_sort(list)
{
	for (var i = 1; i < list.length; ++i)
	{
		var key = list[i];
		for (j = i - 1; j >= 0; --j)
		{
			if (key > list[j]) break;
			list[j + 1] = list[j];
		}
		list[j + 1] = key;
		// console.log(list);
	}
}

insertion_sort(list);
console.log(list);
