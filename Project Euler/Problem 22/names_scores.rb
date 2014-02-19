#!/usr/bin/ruby

f  = File.open("names.txt")

array = []

f.each_line do |x| 
		x = x.split ","
		array.push x
end

#puts array
puts array.length
