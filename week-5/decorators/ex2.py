
def function_info(func):
    def print_func_info(*args, **kwargs):
        print("func name: ",func.__name__)
        print("args: ",*args)
        print("kwargs: ", **kwargs)
        data = func(*args, **kwargs)
        print("return value: ",data)
        print("type: ", type(data))
    return print_func_info
    
@function_info
def add(*args,**kwargs):
    sum=0
    for arg in args:
        sum += arg
    return sum


add(1, 2, age=3, text="hello") 

