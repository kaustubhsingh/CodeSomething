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

		counter = y.length
		alphabetical_value = 0
		
		y.split("").each do |z|
		
			if (counter > 0)
					alphabetical_value += (z - 'A')
					counter-- 
			end
			
		end
		
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
