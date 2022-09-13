# spot check 1

fridge ={
    "milk":7,
    "bananas":4,
    "juice": 2
}

def check_milk():
    if fridge.get("milk") == 1:
        print("there is one bottle of milk")
    else:
        print("there are "+str(fridge["milk"])+" bottles of milk")
    

check_milk()

# spot check 2
closet = {
    "shirts": {
        "blue": 4,
        "black": 1,
        "white": 13,
        "flamingo-pink": 2
    },
    "pants": {
        "shorts": {
            "purple": 1,
            "red": 2,
            "flamingo-pink": 3
        },
        "jeans": {
            "denim": 8,
            "organic": 1
        }
    },
    "jackets": {}
}

#1.
print(len(closet.keys()))

#2.
print(closet["shirts"]["white"])

#3.

print(closet["pants"]["shorts"]["flamingo-pink"])

#4.
closet["pants"]["jeans"]["organic"] = 7
print(closet["pants"]["jeans"]["organic"])

#5.

closet["pants"]["jeans"]["denim"] -= 4
print(closet["pants"]["jeans"]["denim"])

#6.

if(closet["pants"]["shorts"]["flamingo-pink"] > closet["shirts"]["flamingo-pink"]):
    print("bottom")
else:
    print("top")



# spot check 3
def get_squares_dictionary(n):
    return {str(i): i**2 for i in range(n)}

print(get_squares_dictionary(5))