import time
    
def slow_down(func):
    def slow_down_func(*args, **kwargs):
        start = int(time.time()*1000)
        while(start+1000 > int(time.time()*1000)):
            continue
        func(*args, **kwargs)
    return slow_down_func
    
@slow_down
def sum_many(end):
    sum=0
    for i in range(1,end):
        sum += 1

    return sum


sum1 = sum_many(1000)
sum2 = sum_many(5000) 

