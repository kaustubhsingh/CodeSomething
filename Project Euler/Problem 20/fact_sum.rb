
def findDigitsAxB(a, b)
	
	digits = []
	carry = 0
	
	while ((a * b + carry) > 0)
		digit = (a + carry) % 10
		a = (a + carry) / 10
	
		if ((digit * b + carry) < 10)
			digits.insert(0, digit * b + carry)
		else
			digits.insert(0, (digit * b + carry) % 10)
			carry = (digit * b) / 10
		end
		
	end

	return digits

end

puts findDigitsAxB(2, 5)
