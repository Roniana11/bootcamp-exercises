from collections import defaultdict


def def_value():
    return 0

def get_5common(s):
    dic = defaultdict(def_value)
    splittedString = s.split(' ')
    for word in splittedString:
        dic[word] += 1
    pair_array = [(k,v) for k,v in dic.items()]
    sortedSomething = sorted(pair_array, reverse=True, key=lambda pair: pair[1])
    return sortedSomething[:5]

line = "wee wee goo koo goo doo doo so go go yo yo yo yo fo zo"
print(get_5common(line))