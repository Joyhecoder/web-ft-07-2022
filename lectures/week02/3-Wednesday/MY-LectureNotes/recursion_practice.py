#2. Write a function factorial which accepts a number and returns
# the factorial of that number.  A factorial is the product of an
# interger and all the integers below it; eg. , factorial four( 4!) is
# equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

# def factorial(n)
#     if (n==0):
#         return 1
#     return n * factorial(n-1)


# 3. Write a function called recursiveRange which accepts a number and adds up all
# the numbers from 0 to the number passed to the function
# def recursiveRange(n):
#     if n==0:
#         return 0
    
#     return n + recursiveRange(n-1)


# 4. Write a recursive function called reverse which accepts
# a string and returns a new string in reverse
def reverse(word):
    if(len(word) == 0):
        return ""
    
    return reverse(word[1:]) + word[0]

print(reverse("Hello"))


# 5. Write a recursive function called isPalindrome which returns
# true if the string passed to it is a palindrome (reads the same forward and backward).
# Otherwise returns false.

def isPalindrome(word):
    if (len(word)== 1):
        return True
    if (len(word) == 2):
        return word[0] == word[1]
    if word[0] == word[-1]
    
    