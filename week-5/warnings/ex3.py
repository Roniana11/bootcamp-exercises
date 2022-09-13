def ask_age():
    try:
        age = int(input("How old are you? ")) 
    except Exception as e:
        print(e)


ask_age()