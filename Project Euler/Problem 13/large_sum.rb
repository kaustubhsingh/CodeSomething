
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
	
end

extract_digits	

