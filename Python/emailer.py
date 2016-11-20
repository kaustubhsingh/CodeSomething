#!/usr/bin/python3


emails = []
read_emails = open('email.txt', 'r')

for line in read_emails:
	emails.append(line.strip())
	
	
print emails



