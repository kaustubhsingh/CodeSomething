

dict = {}

def fibonacci(n):
	if n == 0 or n == 1:
		return n
	elif dict.has_key(n):
		return dict[n]
	else:
		dict[n] = fibonacci(n - 1) + fibonacci(n - 2)
		
		return dict[n]
		
		
print fibonacci(10)
print dict
