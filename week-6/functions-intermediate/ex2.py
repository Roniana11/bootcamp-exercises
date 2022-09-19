def max_arguments():
    
    max_args = 0
    def args_counter(*args):
        args_len = len(args)
        nonlocal max_args
        max_args = args_len if args_len > max_args else max_args
        return max_args
    return args_counter 


func = max_arguments()

print(func())           # 0
print(func(1,2,3,7))    # 4
print(func(9,2))        # 4
print(func(1,2,3,4,5))  # 5 