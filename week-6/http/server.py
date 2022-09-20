from fastapi import FastAPI

from fastapi import Request

import uvicorn

app = FastAPI()

wonders = [
    {
        "ID":1,
        "name": "The Great Pyramid",
        "location": "Giza"
    }
]

id_counter =0

@app.get('/')
def root():
    return {"message":"Server is up and running"}

@app.post('/wonders')
async def create_wonder():
    print("Someone's trying to make a post request")
    return "Created"

@app.post('/wonders',status_code=201)
async def create_wonder(request: Request):
    new_wonder = await request.json()
    global id_counter 
    id_counter+=1
    new_wonder["ID"] = id_counter
    wonders.append(new_wonder)
    return "Created"


@app.get('/wonders/{id}')
def get_wonders(id):
    for wonder in wonders:
        if(wonder["ID"] == int(id)):
            return wonder["name"]
    return ""

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
