#### 1. Multiply Vectors
list1 = [2, 3, 4]
list2 = [2, 5, 6]
list3 = [ ]
index1 = 0 #list1 index
index2 = 0 #list2 index
while index1 < len(list1):
    new_num = list1[index1] * list2[index2]
    list3.append(new_num)
    print(new_num)
    index1 += 1
    index2 += 1

print(list3)