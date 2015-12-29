

class Scorecard:
    
    x = 0
    
    def score(self):
        self.x = self.x + 1
        print "score: ", self.x
        
        
y = Scorecard()

y.score()
y.score()
        