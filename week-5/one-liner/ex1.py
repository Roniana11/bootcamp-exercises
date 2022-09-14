def is_palindrom(s):
    return s[::-1] == s

print(is_palindrom('dood'))
print(is_palindrom('dooe'))

def reverse_words(s):
    return " ".join(s[::-1].split(" ")[::-1])

print(reverse_words('hello world'))

def swap_vars(a,b):
    a,b = b,a

a,b=5,10

swap_vars(a,b)
print(a,b)