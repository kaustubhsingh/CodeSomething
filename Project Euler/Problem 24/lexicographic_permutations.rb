#!/usr/bin/ruby

$results = []

def generatePermutations(a, b)
	
	# print a; print b; print "\n"

	if $results.length == 1000000
		return
	end


	if b == ""
		$results.push(a)
		return
	end

	b.split(//).each_with_index { |x, i|

		generatePermutations(a + x, b[0, i] + b[i + 1..b.length - 1])
		
	} 
	

end

generatePermutations("", "0123456789")
print $results[999999]


