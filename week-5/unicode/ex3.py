
def encode(msg,n):
    res=''
    for char in msg:
        res += chr((ord(char) + n-65) % 26 + 65)
    return res


def decode(msg,n):
    res=''
    for char in msg:
        res += chr((ord(char) - n-65) % 26 + 65)
    return res


print(encode("ABXYZ", 3))   # "DEABC" 
print(decode("DEABC", 3))    # "ABXYZ" 