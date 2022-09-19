def reduce(func,iter,initial=None):
  if len(iter) == 0:
    return

  start = 0 if initial else 1
  accumulator = initial or iter[0]

  for i in range(start,len(iter)):
    result = func(accumulator,iter[i])
    accumulator = result

  return accumulator


list = [1, 2, 3, 4, 5]
print(reduce(lambda num1,num2: num1*num2,list,0.5))