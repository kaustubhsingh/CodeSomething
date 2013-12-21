// Problem 15

var lattice_paths = function(l, b)
{
	var hash = new Array(l + 1);
	
	for (var i = 0; i <= l; ++i)
	{
		hash[i] = new Array(b + 1);
		for (var j = 0; j <= b; ++j)
		{
			hash[i][j] = -1;
		} 
	}
			
	return count_lattice_paths(l, b, hash);
}

var count_lattice_paths = function(l, b, hash)
{
	var count = 0;

	//console.log(l + " , " + b);
	
	if (l == 0 || b == 0) return 1;

	if (hash[l][b] != -1) return hash[l][b];	

	if (l > 0)
	{ 
		if (hash[l - 1][b] == -1)
		{
			count = count_lattice_paths(l - 1, b, hash);
		}
		else
		{
			count = hash[l - 1][b];
		}
	}
	
	if (b > 0)
	{
		if (hash[l][b - 1] == -1)
		{
			count = count + count_lattice_paths(l, b - 1, hash);
		}
		else
		{
			count = count + hash[l][b - 1];
		}
	}
		
	hash[l][b] = count;
	
	return count;
}

console.log(lattice_paths(20, 20));
