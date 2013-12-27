var max_path_sum = function() {

	var fs = require("fs");
	
	var triangle = fs.readFileSync("input.txt").toString().split(/ |\n/);
	triangle.pop();
	
	console.log(triangle);
}

console.log(max_path_sum());
