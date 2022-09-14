

class Restaurant:
    def __init__(self,name, rating, is_vegetarian):
        self.name = name
        self.rating = rating
        self.is_vegeterian = is_vegetarian

    def get_menu(self):
        if self.is_vegeterian:
            print("We have vegetables")
        else:
            print("We have meat")


r1 = Restaurant("Zoozaazo", 4,False)
r2 = Restaurant("Top La Pompei", 3, False)
r3 = Restaurant("El Viego", 5, True) 

print(r3.rating)

r1.get_menu() # outputs: We have meat
r3.get_menu() # outputs: We have vegetables