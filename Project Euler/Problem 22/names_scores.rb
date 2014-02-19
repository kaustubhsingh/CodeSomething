#!/usr/bin/ruby

f  = File.open("names.txt")

array = f.each{|x| x}

puts array
