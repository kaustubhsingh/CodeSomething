#!/usr/bin/ruby

f  = File.open("names_2.txt")

array = []

f.each_line do |x| 
		x = x.split ","
		puts x
		puts "----"
		array.insert(0, x)
end

names = array

puts array
puts names.length
