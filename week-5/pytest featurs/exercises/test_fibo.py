import pytest

def fibonacci(index):
    if index<= 0:
        print("Incorrect input")
    elif index == 1:
        return 0
    elif index == 2:
        return 1
    else:
        return fibonacci(index-1)+fibonacci(index-2)

@pytest.mark.parametrize((2,1),(5,4))
def test_fibonacci(index,fibo):
    assert fibo == fibonacci(index)