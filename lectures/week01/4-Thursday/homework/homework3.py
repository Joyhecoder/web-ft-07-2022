#### 3. Matrix Addition II

#create two lists with same length of pairs
matrix1 = [[1,3],[2,4], [3, 5]]
matrix2 = [[5,2], [1,0], [2, 9]]


#create an empty list
list1 = []

#create an index variable of Matrix
matrix_length = 0
#while loop to add each number of the corresponding number

while matrix_length < len(matrix1):
    index_sum1 = matrix1[matrix_length][0]+ matrix2[matrix_length][0]
    index_sum2 = matrix1[matrix_length][1]+ matrix2[matrix_length][1]
    list2 = [index_sum1, index_sum2] 
#append in the empty list 
    list1.append(list2)
    
    matrix_length += 1
print(list1)
