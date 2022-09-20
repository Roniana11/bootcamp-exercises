
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn
from store import store

OUT_OF_STOCK = 0
INVENTORY_MAX =10
DISCOUNT = 2


app = FastAPI()
app.mount("/images", StaticFiles(directory="."), name="images")
@app.get('/image')
def image():
    return FileResponse('C:/Users/Rent/Documents/code/bootcamp/u-code/exercises/week-6/functions-intermediate/fastApi/server_example/exersices/images/cat.jpeg')
@app.get('/sanity')
def sanity():
   return {"meassage":"Server is up and running smoothly"}

@app.get('/sale')
def sale(admin=False):
    if admin == "true":
        for item in store:
            if item["inventory"] > INVENTORY_MAX:
                item["price"] /= DISCOUNT

    return store
    
@app.get('/{name}')
def price(name):
    item_price = [item["price"] for item in store if item["name"] == name]
    return {"price": item_price[0] or None}

@app.get('/buy/{name}')
def buy(name):
    item = [item for item in store if item["name"] == name]
    if item[0]["inventory"] is not OUT_OF_STOCK:
        item[0]["inventory"] -= 1
        return item[0]
    else:
        return "The requested product is out of stock"



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)