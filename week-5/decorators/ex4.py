import time


def calls_count(func):
    calls_dict = {}
    def count_calls_func(*args, **kwargs):
        name = func.__name__
        function_count= calls_dict.get(name)
        calls_dict[name] = function_count + 1 if function_count else 1
        func(*args, **kwargs)
        print(calls_dict[name])
    return count_calls_func
    
@calls_count
def sum_many(end):
    sum=0
    for i in range(1,end):
        sum += 1

    return sum

sum1 = sum_many(1000)
sum2 = sum_many(5000) 
sum2 = sum_many(5000) 
sum2 = sum_many(5000) 
sum2 = sum_many(5000) 

