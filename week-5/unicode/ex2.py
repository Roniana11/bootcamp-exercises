def encode(msg):
    res=''
    for char in msg:
        res += str(ord(char))+ ' '
    return res.strip()


def decode(msg):
    res=''
    for code in msg.split(' '):
        res += chr(int(code))
    return res

print(encode("Hello"))    # "72 101 108 108 111" 

print(decode("72 101 108 108 111"))   # "Hello"
print(decode(encode("Hello")))        # "Hello" 