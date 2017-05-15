#!/usr/bin/python3
import requests
import smtplib

emails = []
read_emails = open('email.txt', 'r')

for line in read_emails:
	emails.append(line.strip())
	
	
print emails

def get_weather_forecast():
	url = ''
	r = requests.get(url)
	weather_json = r.json()
	
def send_emails():
	server = smtplib.SMTP('smtp.gmail.com', '587')
	server.starttls()
	server.login('gmail.com', 'password')
	server.sendmail(fromaddr, toaddr, msg)
	server.quit()


