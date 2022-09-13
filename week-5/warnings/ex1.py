def get_list_element(my_list, index):
    try:
        print(my_list[index])
    except IndexError:
        print("wrong index")


get_list_element([1,2,3],"u")