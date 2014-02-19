#!/usr/bin/ruby

f  = File.open("names.txt")

array = f.each{|x| return x}

puts array
