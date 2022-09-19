def my_accumulate(iterable):
    length = len(iterable)
    sum = 0
    for i in range(0,length):
        sum += iterable[i]
        yield sum 
        


for elem in my_accumulate([1,2,3,4,5]):
  print(elem) 