
def cache_func(func):
    cache = {}
    def count_calls_func(*args, **kwargs):
        args_str = ''.join(map(str,args)) + ''.join(map(str,kwargs))
        name = func.__name__
        function_catch = {}

        if cache.get(name) is not None:
            function_catch = cache[name]

        if args_str in function_catch.keys():
            print(cache)
            return function_catch[args_str]
        else:
            result = func(*args, **kwargs)
            function_catch[args_str] = result
            cache[name] = function_catch
            return result

    return count_calls_func

#iterative  
# @cache_func
# def fibonacci(index):
#     print("calculating: ", index) 
#     a, b = 0, 1
#     for i in range(0, index):
#         a, b = b, a + b
#     return a

@cache_func
def fibonacci(index):
    print("calculating: ", index) 
    if index<= 0:
        print("Incorrect input")
    elif index == 1:
        return 0
    elif index == 2:
        return 1
    else:
        return fibonacci(index-1)+fibonacci(index-2)

print(fibonacci(2))
print(fibonacci(4)) 