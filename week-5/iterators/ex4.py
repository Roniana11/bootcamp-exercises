class CircleIter:
    def __init__(self, iter,times):
        self.times = times
        self.iter = iter

    def __iter__(self):
        self.length = len(self.iter)
        self.counter = 0
        return self

    def __next__(self):
        if self.counter >= self.times:
            raise StopIteration
        item_index = self.counter% self.length
        self.counter += 1
        return self.iter[item_index] 


# for x in CircleIter([1,2],5):
#   print(x, end=" ") 

for x in CircleIter([1,2,3],4):
  print(x, end=" ")
  for y in CircleIter([5,6],3):
    print(y, end=" ")
print() 