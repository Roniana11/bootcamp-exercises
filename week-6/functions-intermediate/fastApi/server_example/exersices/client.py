import requests


def getPrice():
    product = input("Enter product name: ")
    try:
        response = requests.get(f"http://127.0.0.1:8000/{product}").json()
        return response
    except:
        print("couldn't get price")

def buyItem():
    product = input("what product would you like to buy? ")
    try:
        response = requests.get(f"http://127.0.0.1:8000/buy/{product}").json()
        print("Congratulations, you've just bought {0} for {1}. There are {2} left now in the store.".format(response["name"],response["price"],response["inventory"]))
    except:
        print("couldn't find product")

def giveDiscount():
    try:
        response =requests.get(f"http://127.0.0.1:8000/sale?admin=true").json()
        print("We applied the discount")
        return response
    except:
        print("could not access store")

# price = getPrice()
# product = buyItem()
store = giveDiscount()

print(store)
