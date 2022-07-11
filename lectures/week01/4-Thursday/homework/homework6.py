#### 6. Long-long Vowels
string = "good"
index = 0 #this is the index of the string

#compare each value if equivalent then times 5

list_string = list(string)
# print(list_string)
for i in list_string:
    # print(i)
    
    if i == list_string[index+1]:
        list_string.insert(index, i*3)
        
        string = "".join(list_string)
        print(string)
        index += 1
        break
    else:
        index += 1   
print(string)
