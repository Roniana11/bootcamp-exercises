def my_enumerate(iterable, start=0):
    enumerate = []
    for item in iterable:
        enumerate.append((start,item))
        start += 1

    return enumerate

for index, elem in my_enumerate([10, 20, 30, 40]):
  print(index, elem) 

for index, elem in my_enumerate([10, 20, 30, 40], 10):
  print(index, elem)  