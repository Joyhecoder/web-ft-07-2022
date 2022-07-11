#multiplication table
factor1 = [1,2,3,4,5,6,7,8,9,10]
factor2= [1,2,3,4,5,6,7,8,9,10]
index1 = 0
index2 = 0

while index1 < len(factor1):
    m1 = factor1[index1]
    while index2 < len(factor2):
        product = m1 * factor2[index2]
        
        print(f'{m1} * {factor2[index2]} = {product}')
        index2 += 1
    index1 += 1
    index2 = 0