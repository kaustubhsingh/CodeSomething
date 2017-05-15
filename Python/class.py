class test:
    def createName(self, name):
        self.name = name
    def displayName(self):
        return self.name

first = test()
first.createName('Kaustubh')
print "output===="
print "%s" % first.displayName
