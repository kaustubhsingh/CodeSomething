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

def findAlphabeticalValue(y)

		findValue = { "A" => 1, "B" => 2, "C" => 3, "D" => 4, "E" => 5, "F" => 6,
				"G" => 7, "H" => 8, "I" => 9, "J" => 10, "K" => 11, "L" => 12,
				"M" => 13, "N" =>14, "O" => 15, "P" => 16, "Q" => 17, "R" => 18,
				"S" => 19, "T" => 20, "U" => 21, "V" => 22, "W" => 23, "X" => 24,
				"Y" => 25, "Z" => 26 }

		counter = y.length
		alphabetical_value = 0
	
		y.gsub(/[^A-Z ]/i, '')
		
		y.split("").each{ |z|
					if z =~ /[A-Z ]/
						puts z
						alphabetical_value += findValue[z]	
					end	
		}
		
		return alphabetical_value
end
		
def processSortedArray()

	array = readNamesAndSort()
	i = 0
	array.each { |x|
		i = i + 1;
		
		
		print i; print " "; print x; print findAlphabeticalValue(x); print "\n"
		
		
	}
	
	return ""
end

puts processSortedArray()
#findAlphabeticalValue("ABC")
