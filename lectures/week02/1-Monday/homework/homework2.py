#### 2. Find the largest number

def largest(num = []):
    if len(num) == 0:
        return ""
    
    large_num = num[0]
    for i in num:
        if i > num[0]:
            large_num = i
    return large_num

large_num = largest([3, 0, -2, -7, -9,])
print(large_num)