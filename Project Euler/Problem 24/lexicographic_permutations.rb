#!/usr/bin/ruby

def generatePermutation(str)
	arr = []
	str.split(//).each { |x|
		arr.push(x)

	} 
	puts arr
	
end

generatePermutation("hiy")


