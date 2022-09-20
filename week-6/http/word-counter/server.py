from fastapi import FastAPI
import uvicorn
from model import WordsModel
from fastapi import Request

app = FastAPI()
word_model = WordsModel()

@app.get('/')
def sanity():
    return "server is up and running"

@app.get('/{word}')
def getWord(word):
    return word_model.get_word_count(word)
    
@app.post('/')
async def addWord(request: Request):
    response= await request.json()
    word = response["word"]
    word_model.update_word(word)
    return {"text": f"Added {word}", "currentCount": word_model.get_word_count(word) }
    
@app.post('/sentence')
async def addWord(request: Request):
    sentence = await request.json()
    numNewWords = 0
    numOldWords = 0
    for word in  sentence["sentence"].split():
        word_model.update_word(word)
        if word_model.get_word_count["count"] == 1:
            numNewWords +=1
        else:
            numOldWords +=1

    return {"text": "Added {numNewWords} words, {numOldWords} already existed"}

@app.delete('/{word}')
async def addWord(word):
    try:
        word_model.delete_word(word)
    except:
        return
    














if __name__ =="__main__":
      uvicorn.run(app, host="0.0.0.0", port=8000)
