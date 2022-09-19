import datetime

    
def exe_time(func):
    def mesure_exe_time(*args, **kwargs):
        start = datetime.datetime.now()
        func(*args, **kwargs)
        print(datetime.datetime.now()-start) 
    return mesure_exe_time
    
@exe_time
def sum_many(end):
    sum=0
    for i in range(1,end):
        sum += 1

    return sum


sum1 = sum_many(10000000)
sum2 = sum_many(50000000) 

