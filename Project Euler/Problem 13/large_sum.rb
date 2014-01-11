file = File.open("numbers.txt")

numbers = file.read

numbers = numbers.split("\n")

puts numbers[0]

file.close

