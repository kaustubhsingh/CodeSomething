#!/usr/bin/ruby

f  = File.open("names_2.txt")

array = []

f.each_line do |x| 
		x = x.gsub(" ", "").split ","
		puts x
		puts "----"
		puts x.length
		puts x[0]
		puts x[1]
		puts x[2]
		array.insert(0, x)
end

names = array

puts array
puts names.length
