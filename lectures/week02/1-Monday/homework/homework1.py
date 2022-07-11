#### 1. Find the smallest number
def smallest(num = []):
    if len(num) == 0:
        return ""
    small_num = num[0]
    for i in num:
        if i < num[0]:
            small_num = i
    return small_num

small_num = smallest([3, 2, 7, 9])
print(small_num)