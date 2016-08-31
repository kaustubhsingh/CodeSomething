


def Swap(A, x, y):
    k = A[x]
    A[x] = A[y]
    A[y] = k
    
A = [4, 5, 2, 3]

print (A)
Swap(A, 1, 2)

print (A)