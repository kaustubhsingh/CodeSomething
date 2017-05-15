

array = [2, 3, 5, 4, 4, 2, 3, 6, 6]

def find_missing_id(array):
    array.sort()
    print array
    
    for i in range(0, len(array)):
        if (i % 2 == 0 and array[i] != array[i+1]):
            print i
            print array[i]
            print array[i+1]
            return array[i]

            #print i
 
def find_missing_id_2(array):
    dicti = {}
    
    for i in array:
        if i not in dicti:
            dicti[i] = 1
        else:
            dicti[i] = dicti[i] + 1
            
    for key in dicti.keys():
        if dicti[key] == 1:
            return key
        
def find_missing_id_3(array):
    
    xor = 0
    for i in array:
        xor ^= i
        
    return xor

    
    
    
print find_missing_id_3(array)
    
