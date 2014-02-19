#!/usr/bin/ruby

f  = File.open("names.txt")

array = []

f.each_line do |x| 
		x = x.split ","
		array.insert(0, x)
end

names = array

puts array
puts names.length
