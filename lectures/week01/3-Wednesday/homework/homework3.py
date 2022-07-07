width = input()
width = int(width)
height = input()
height = int(height)
symbol = ""

print("*" * width)

while (height-2 > 0):
    print("*" +" "*(width-2) + "*")
    height -=1
    
print("*" * width)
    