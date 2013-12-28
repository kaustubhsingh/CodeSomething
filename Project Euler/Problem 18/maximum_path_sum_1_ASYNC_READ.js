#!/usr/bin/env node

// usage:  node maximum_path_sum_1_ASYNC_READ.js <input file>

start_time = (new Date()).getTime();

function max_path_sum_recurse(triangle, level, index, max_level) {
	
	if (level > max_level) return 0;
	
	var max_sum = 0;
	
	max_sum = triangle[index -1 + (level - 1) * level / 2] +
	 Math.max(max_path_sum_recurse(triangle, level + 1, index, max_level),
				max_path_sum_recurse(triangle, level + 1, index + 1, max_level));	

	return max_sum;
}

var callback = function(err, data) {

	if (err) throw err;
					
	var triangle = data.toString();			
					
	var level = 0;
	for (var i = 0; i < triangle.length; ++i)
	{
			if (triangle[i] == "\n") level++;
	}
	
	console.log(level);
	
	triangle = triangle.split(/ |\n/);
	triangle.pop();
	triangle = triangle.map( function(x){
		return parseInt(x, 10);
	});

	var answer = max_path_sum_recurse(triangle, 1, 1, level);
	
	console.log(answer);
	console.log("time taken in ms: %d", (new Date()).getTime() - start_time);	
}
			
var max_path_sum = function() {

	var fs = require("fs");
	
	fs.readFile(process.argv[2], callback);
}

max_path_sum();


