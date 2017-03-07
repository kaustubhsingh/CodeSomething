

function cs142MakeMultiFilter(originalArray) {
	
	var current_array = originalArray;
	
	return function arrayFilterer(filter, callback) {
		
		for (var i = 0; i < current_array.length; ++i)
		{
			if (filter(current_array[i]) == 0)
				current_array.splice(i, 1)
		}
		
		return callback(current_array);
	}
	
	
}

var arrayFilterer = cs142MakeMultiFilter([1, 2, 3])

arrayFilterer(function (elem) {
	return elem != 2;
}, function (currentArray) {
	console.log(this);
	console.log(currentArray);
});


