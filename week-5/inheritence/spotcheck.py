class Rectangle:
    def __init__(self,width,height):
        self.width = width
        self.height = height

    def calculate_area(self):
        return self.height * self.width

    def calculate_perimeter(self):
        return self.height*2 + self.width*2

class Square(Rectangle):
    def __init__(self,height):
        super().__init__(height,height)

    def calculate_perimeter(self):
        return self.height*4

s = Square(2)
print(s.calculate_perimeter()) # outputs: 8
print(s.calculate_area()) # outputs: 4 

