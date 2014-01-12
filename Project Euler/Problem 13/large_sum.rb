
def read_file

	file = File.open("numbers.txt")

	numbers = file.read.to_str
	numbers = numbers.split(/\n/)
	# puts numbers[0]

	file.close

	return numbers
end


def extract_digits

	numbers = read_file
	puts numbers[0][0]
	digits = []
	
	for i in 0..49
		sum = 0
		numbers.each { |x|
			sum = sum + x[i].to_i
		}
		
		digits.insert(0, sum % 10)
		
		if digits.length == 10
			break
		end
			
		sum = sum / 10
	end
	
	return digits
end

puts extract_digits	


