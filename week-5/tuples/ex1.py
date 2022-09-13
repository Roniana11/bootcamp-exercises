#ex1
my_tuple = (3,1,"sss",34,[1,2,3])

#ex2
print(my_tuple[3])
print(my_tuple[-4])

#ex3
days = ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")

newdays = days[:2]+days[3:]
print(newdays)

#ex4

numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

newnumbers = numbers[::-1]

print(newnumbers)

#ex5

def reverse_tuple_minus_first(t):
    return t[:0:-1]

def reverse_tuple_minus_last(t):
    return t[-2::-1]


print(reverse_tuple_minus_first((1,2,3)))   
print(reverse_tuple_minus_first((2,4,6,8,10,12)))   
print(reverse_tuple_minus_last((1,2,3)))   
print(reverse_tuple_minus_last((2,4,6,8,10,12)))   