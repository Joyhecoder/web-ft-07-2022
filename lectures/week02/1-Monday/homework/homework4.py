#### 4. Find the longest String
def longest(list_of_string=[]):
    if len(list_of_string) == 0:
        return ""
    
    longer_string = list_of_string[0]
    for i in list_of_string:
        if len(i) > len(longer_string):
            longer_string = i 
    return longer_string

result = longest(["this", "is", "longer"])
print(result)
