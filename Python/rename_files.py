import os

def rename_files():
    file_list = os.listdir()

    for file_name in file_list:
        print(file_name)



rename_files()
