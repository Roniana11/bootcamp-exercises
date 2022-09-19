def increase_key(key,amount=1):

    def increase(obj):
        obj[key] += amount

    return increase

employee = {
  "name": "Momo",
  "age": 61,
  "salary": 10000
} 

increase_age = increase_key('age')
increase_salary = increase_key('salary',1000)

while employee["age"] < 69:
    increase_age(employee)
    increase_age(employee)
    increase_salary(employee)

print(employee["salary"])

