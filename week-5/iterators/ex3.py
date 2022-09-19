def is_prime(n):
    if n==2 or n==3: return True
    if n%2==0 or n<2: return False
    for i in range(3, int(n**0.5)+1, 2):   # only odd numbers
        if n%i==0:
            return False    

    return True
    

def get_prime_factors(number):
    
    for i in range(2,number):
        if is_prime(i):
            while number % i == 0:
                number = number/i
                yield i

for x in get_prime_factors(100):
  print(x) 