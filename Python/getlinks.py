from BeautifulSoup import *
import urllib

url = raw_input('Enter the URL: ')

#print "Entered URL: ", url

page = urllib.urlopen(url).read()

#print page

soup = BeautifulSoup(page)

tags = soup('a')

for tag in tags:
    print tag.get('href', None)