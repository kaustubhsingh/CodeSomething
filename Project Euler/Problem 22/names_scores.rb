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
	
		y.gsub(/[^A-Z ]/i, '')
		
		y.split("").each{ |z|
					if z =~ /[A-Z ]/
						alphabetical_value += (z.to_i - "A".to_i)	
					end	
		}
		
		puts alphabetical_value
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
