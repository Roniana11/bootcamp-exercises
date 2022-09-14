import datetime


print(datetime.datetime.today())

print(datetime.datetime.today().strftime("%H:%M:%S"))
print(datetime.datetime.today().strftime("%d/%m/%Y, %H:%M:%S"))
print(datetime.datetime.today().strftime("%m/%d/%Y, %H:%M:%S"))


print("Current year is: ",datetime.datetime.today().strftime("%Y"))
print("Current day is: ", datetime.datetime.today().strftime("%A"))
