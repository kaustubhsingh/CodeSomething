
def read_file

	file = File.open("numbers.txt")

	numbers = file.read.to_str
	numbers = numbers.split(/\n/)
	# puts numbers[0]

	file.close

	return numbers
end

puts read_file

