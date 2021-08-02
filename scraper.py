import requests
from bs4 import BeautifulSoup

response = requests.get(url="https://en.wikipedia.org/wiki/Graduate_Record_Examinations",)

soup = BeautifulSoup(response.content, 'html.parser')

title = soup.find(id="firstHeading")
print(title.string)

allp = soup.find(id="bodyContent").find_all("p")

print(allp[1].text)
