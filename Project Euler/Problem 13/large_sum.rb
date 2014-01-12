#!/usr/bin/ruby

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
	# puts numbers[0][0]
	digits = []
	
	sum = 0
	
	for i in (49).downto(0)
		# puts "i = #{i}"
	
		numbers.each { |x|
		
			sum = sum + x[i].to_i
		}
	
		# puts "sum = #{sum}"
		
		if i != 0 
			digits.insert(0, sum % 10)
		else
			digits.insert(0, sum)
		end	
			
		sum = sum / 10
	end
	
	return digits
end

def generate_first_ten_digits

	digits = extract_digits	

	digit_str = ""
	
	for i in 0..9
		digit_str =  digit_str + digits[i].to_s
	end
	
	digit_str = digit_str.split("")
	digit_str = digit_str[0..9]
	puts digit_str
end

generate_first_ten_digits

