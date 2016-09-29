

dict = {}

def fibonacci(n):
	if n == 0 or n == 1:
		return n
	elif dict.has_key(n):
		return dict[n]
	else:
		dict[n] = fibonacci(n - 1) + fibonacci(n - 2)
		
		return dict[n]
		
		
#print fibonacci(100)
#print dict

def fibo_iterative(n):
	if n == 0 or n == 1:
		return n
		
	fibo_n1 = 0
	fibo_n2 = 1
	
	for ctr in range(n):
		fibo_n = fibo_n1 + fibo_n2 
		fibo_n2 = fibo_n1
		fibo_n1 = fibo_n
		
	return fibo_n
		
print fibo_iterative(10)
	
def fibo_slow(n):
	if n == 0 or n == 1:
		return n
	else:
		return fibo_slow(n - 1) + fibo_slow(n - 2)
		
		
print fibo_slow(10)


