import pytest
def anagram(str1, str2):
    if len(str1) != len(str2):
        return False

    exisiting_letters =[letter for letter in str1 if letter in str2]
    return len(exisiting_letters) == len(str1)


@pytest.mark.parametrize(("hello","lleho"))
def test_anagram(str1,str2):
    assert anagram(str1,str2) 
