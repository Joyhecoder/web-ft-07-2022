#### 3. Find the shortest String

def shortest(strings):
    if len(strings) == 0:
        return ""
    
    short_string = strings[0]  #why this needs to be here
    for i in strings:
        if len(i) < len(strings[0]):
            short_string = i
    return short_string 

shorter_string = shortest(["this", "short", "hahaha"])      

print(shorter_string)