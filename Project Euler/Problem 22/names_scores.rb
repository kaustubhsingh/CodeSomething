#!/usr/bin/ruby

def readNamesAndSort()

	f  = File.open("names.txt")

	array = []

	f.each_line do |x| 
			x = x.gsub(" ", "").split ","
			
			x.each { |z|
				array.push z
			}
	end

	names = array.sort

	# puts names
	# puts names.length
	return names
end

def processSortedArray()

	array = readNamesAndSort()
	i = 0
	array.each { |x|
	i = i + 1;
	
	
	print i; print " "; print x; print "\n"
	
	
	}
	
	return ""
end

puts processSortedArray()
