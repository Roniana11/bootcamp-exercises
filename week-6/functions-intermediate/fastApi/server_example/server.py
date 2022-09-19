from fastapi import FastAPI
import uvicorn
import requests

# server code...
app = FastAPI()


@app.get('/')
def root():
    return {"message":"Someone has made a request and accessed the server. Exciting!"}


@app.get('/maps')
def maps():
    return "Here's some stuff related to maps"


@app.get('/shoobi')
def shoobi():
    return "This here is the shoobi *route*"

@app.get("/book/{name}")
async def get_book(name):
    res = requests.get('https://www.googleapis.com/books/v1/volumes?q={}'.format(name))
    return res.json()

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)



