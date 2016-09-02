

words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', # <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage'
]
  
  
def FindRotationWord(a, b):
    
    print (a)
    print (b)
    print ("--------")
    
    t = a + 1
    k = a + (b - a)/2
    if ((a == b) or (b == (a + 1)) or (b == 0)):
        return words[a]
    elif (words[0] > words[k]):
        return FindRotationWord(0, k)
    else:
        return FindRotationWord(k + 1, b)
        
print (FindRotationWord(0, 5))


            

  
  