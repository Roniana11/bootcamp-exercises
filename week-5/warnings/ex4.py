def divide(x, y):
    try:
        print(f'{x}/{y} is {x / y}')
    except ZeroDivisionError as e:
        print(e)
    
    except TypeError as e:
        print(e)
    
    except ValueError as e:
        print(e)    

divide(3,0)
divide("4",'0')
divide(2.3,"t")

