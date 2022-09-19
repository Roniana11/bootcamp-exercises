my_list = ['I', 2, 'Love', 4, 56, 'Coding', "Python", "in", [8,9,10]]

def test_number():
  assert 3 in my_list # Should assert if number 3 is in my_list
  assert 56 in my_list # Should assert if number 56 is in my_list
  
def test_str():
  assert "I" in my_list and "Love" in my_list and "Coding" in my_list  # Should assert if "I", "Love" and "Coding" are in my_list

def test_upper_str():
  assert len(list(filter(lambda string: string[0] is not string[0].lower(),list(lambda item: isinstance(item,str),my_list)))) # Should assert if all the strings in my_list are in upper case﻿

def test_negative():
  assert 6 not in my_list  # Should assert if number 6 is no﻿t in﻿ my_list - result should be true