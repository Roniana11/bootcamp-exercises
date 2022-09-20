import string

class WordDoesNotExist(Exception):
    pass

class WordsModel:
    def __init__(self):
        self.words ={}

    def get_word_count(self,word):
        formated_word = self.format_word(word)
        return {"count": self.words.get(formated_word) or 0}

    
    def update_word(self,word):
       formated_word = self.format_word(word)
       count = 1 if self.words.get(formated_word) is None else self.words[word] + 1
       self.words[word] = count
       
    def delete_word(self,word):
       formated_word = self.format_word(word)
       try:
        self.words.pop(formated_word)
       except Exception:
        raise WordDoesNotExist()

    def format_word(self,word):
        return word.lower().translate(str.maketrans('', '', string.punctuation+' '))
