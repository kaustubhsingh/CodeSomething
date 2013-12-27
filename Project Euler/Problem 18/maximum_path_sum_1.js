function max_path_sum_recurse(triangle, level, index, max_level) {
	
	if (level > max_level) return 0;
	
	var max_sum = 0;
	
	max_sum = triangle[index -1 + (level - 1) * level / 2] +
	 Math.max(max_path_sum_recurse(triangle, level + 1, index, max_level),
				max_path_sum_recurse(triangle, level + 1, index + 1, max_level));	

	//console.log(max_sum);
	return max_sum;
}


// usage:  node maximum_path_sum_1.js <input file>

var max_path_sum = function() {

	var fs = require("fs");
	
	var triangle = fs.readFileSync(process.argv[2]).toString();
	
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
	
	console.log(triangle);
	
	return max_path_sum_recurse(triangle, 1, 1, level);
}

console.log(max_path_sum());
