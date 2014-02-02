#!/bin/usr/ruby 

def findDigitsAxB(a, b)
	
	digits = []
	carry = 0
	
	while ((a * b + carry) > 0)
		digit = (a) % 10
		a = (a) / 10

		if ((digit * b + carry) < 10)
			digits.insert(0, digit * b + carry)
			carry = 0
		else
			digits.insert(0, (digit * b + carry) % 10)
			carry = (digit * b + carry) / 10
		end
		
	end

	return digits

end

# puts findDigitsAxB(30, 120)

def multiply(product, n)
	result = []
	
	length = product.length
	
	carry = 0
	
	for i in 0..(length - 1)
		digit = product[length - i - 1]
		
		result.insert(0, (digit * n + carry) % 10)
		carry = (digit * n + carry) / 10
		
		if (i == (length - 1))
			while carry > 0
			
				result.insert(0, carry % 10)
				carry = carry / 10
			end
		end
	end
	
	return result

end

# puts multiply([1, 2], 20)

def factorial_sum()
	product = [ 1]
	
	for i in (1..100)
		product = multiply(product, i)
	end
	puts product[0]
	puts product.length
	
	sum = 0
	return product.inject(0){|sum, x| sum + x}
	
end

puts factorial_sum()
