import re

def test():
    fp = open('text.txt')
    for line in fp:
        line = line.rstrip()
        x = re.findall('A+', line)
        print x
        
test()