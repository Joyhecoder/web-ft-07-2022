##### 2. Matrix Addition
Matrix1 = [[1,3],[2,4]]
Matrix2 = [[5,2], [1,0]]
list1 = []
list2 = []
Matrix3= []
index1 = 0 #matrix1 index

while index1 < len(Matrix1):
    n = Matrix1[index1][0] + Matrix2[index1][0]
    m = Matrix1[index1][1] + Matrix2[index1][1]
    list1.append(n)
    list2.append(m)
    
    index1 += 1
Matrix3.append(list1)
Matrix3.append(list2)
print(Matrix3)