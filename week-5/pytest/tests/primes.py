import math

class Prime:

    def is_prime(self,number):
         for i in range(2,number):
            if (number%i) == 0:
                return False
         return True

    def are_prime_numbers(self,*numbers):
         not_prime = [number for number in numbers if self.is_prime(number)==False]
  
         return len(not_prime) >0