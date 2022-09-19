import primes

prime = primes.Prime()

def test_is_three_prime():
    assert prime.is_prime(3)
def test_five_six_seven():
    assert prime.are_prime_numbers(5,6,7)
def test_one():
    assert prime.is_prime(0)
