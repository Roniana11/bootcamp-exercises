BIG_COUNTRY = 50

country_populations={}

country_populations["Ghana"] = 28
country_populations["Brazil"] = 209
country_populations["Mongolia"] = 3

country = "Ghana"

if(country_populations[country] > BIG_COUNTRY):
    print("Big")
else:
    print("small")