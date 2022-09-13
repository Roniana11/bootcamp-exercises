def string_number_to_int(s):
    num= 0
    for char in s:
        num *=10
        char_ord= ord(char)
        if(char_ord < 48 or char_ord > 57):
            return
        num = (num + char_ord-48)

    return num

# print(string_number_to_int("10"))       # output: 10
# print(string_number_to_int("123"))      # output: 123
# print(string_number_to_int("99"))       # output: 99
# print(string_number_to_int("ABC")) 

def string_number_to_decimal(s,base):
    num = 0
    for char in s:
        num *= base
        char_ord= ord(char)
        if(char_ord < 48 or char_ord > 57):
            return
        num = (num + char_ord-48)

    return num

# base 2
print(string_number_to_decimal("10", 2))      # output: 2
print(string_number_to_decimal("101", 2))     # output: 5
print(string_number_to_decimal("12", 2))      # base 8
print(string_number_to_decimal("7", 8))       # output: 7
print(string_number_to_decimal("123", 8))     # output: 83
print(string_number_to_decimal("10", 8))      # output: 8
print(string_number_to_decimal("9", 8))       # base 10
print(string_number_to_decimal("10", 10))     # output: 10
print(string_number_to_decimal("123", 10))    # output: 123
print(string_number_to_decimal("99", 10))     # output: 99
print(string_number_to_decimal("ABC", 10))