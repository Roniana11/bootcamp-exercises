
def to_upper(c):
    if ord(c) > 96 and ord(c) < 123:
        c = chr(ord(c)-32)
    return c

def upper(s):
    res=''
    for char in s:
        res += to_upper(char)
    return res


print(upper("I love Python!"))    # "I LOVE PYTHON!" 