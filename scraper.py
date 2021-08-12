import requests
from bs4 import BeautifulSoup

def wikipedia_scraper(wiki_page):
    response = requests.get(url=f"https://en.wikipedia.org/wiki/{wiki_page}",)
    soup = BeautifulSoup(response.content, 'html.parser')
    title = soup.find(id="firstHeading")
    print(title.string)
    allp = soup.find(id="bodyContent").find_all("p")
    print(allp[1].text)


wikipedia_scraper("science")




