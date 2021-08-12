from wiktionaryparser import WiktionaryParser
parser = WiktionaryParser()
word = parser.fetch('lucid')
print(word[0]['definitions'])