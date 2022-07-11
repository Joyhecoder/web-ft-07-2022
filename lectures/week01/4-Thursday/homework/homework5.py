#### 5. Leetspeak
string = "I am a leet programmer"
string = string.upper()
print(string)
#loop through the string
for i in string:
    if i == "A":
        new_string = string.replace("A", "4")
        string = new_string
    if i == "E":
        new_string = string.replace("E", "3")
        string = new_string
    if i== "G":
        new_string = string.replace("G", "6")
        string = new_string
    if i== "I":
        new_string = string.replace("I", "1")
        string = new_string
    if i== "O":
        new_string = string.replace("O", "0")
        string = new_string
    if i== "S":
        new_string = string.replace("S", "5")
        string = new_string
    if i== "T":
        new_string = string.replace("T", "7")
        string = new_string
        
    
        


print(new_string.lower())