import urllib

fhand = urllib.urlopen('http://www.bontags.com')

counts = dict()

for line in fhand:
    line = line.strip()
    x = line.split()
    
    for word in x:
        counts[word] = counts.get(word, 0) + 1
    
    print counts
    
