import re

def test():
    fp = open('text.txt')
    for line in fp:
        line = line.rstrip()
        line = "ksingh@tes.com this is my email."
        x = re.findall('$email.(\S+@\S+)', line)
        print x
        
test()