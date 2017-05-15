


class WordCount:
    def __init__(self, input_string):
        self.string = input_string
        self.array  = []
        
        
    def ExtractWords(self):
		self.array = self.string.split()
		return self
        
    def BuildDictionary(self):
		dicti = {}
		for i in self.array:
			if dicti.has_key(i):
				dicti[i] = dicti.get(i) + 1
			else:
				dicti[i] = 1
		return dicti.items()
				
        
a = WordCount("hello how are you you").ExtractWords()    
print (a.array)
print (a.BuildDictionary())
