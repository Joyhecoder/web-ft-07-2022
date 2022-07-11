
#1. Create a program that will print from 1-10 using a while loop.
number = 1
while number < 11:
    print(number)
    number += 1

#2. Create a program that will print from 10-1 using a while loop.
number = 10
while number > 0:
    print(number)
    number -= 1

#3. Create a program that prompts the user to enter a word.  The program doesn't stop asking the user to enter a word until the user enters the word "stop"
stop = input("Enter stop>>")
while stop.lower() != "stop":
    stop = input("Enter stop>>")
    print(stop)
print("bye")
#4a. Create a program that has a variable named username and another variabled named password with values of your choice.

#4b. Prompt the user for a username and then a password.

#4c. If the both match continue on with the program and give a welcome message.

#4d. If not it prompts the user for the username and password until they get it correct.

#4e. (bonus) have a limited amount of attempts and if they reach the limit it tells the user and exits the program.

saved_username = "Joy"
saved_password = "123"
username = ""
password = ""
while username != saved_username or password != saved_password:
    username = input("your username")

    print(username)
    password = input("your password")
    print(password)
print("Welcome!")


#another solution:
username = 'DkillaK'
password = 'password123!'

login_attempt_username = ""
login_attempt_password = ""
attempts = 0

while login_attempt_username != username and login_attempt_password != password and attempts < 5: 
    login_attempt_username = input('enter a username')
    login_attempt_password = input('enter a password')
    attempts += 1
    if login_attempt_username == username and login_attempt_password == password: 
        print('welcome!')
    elif attempts == 5:
        print('too many attempts. Restart program and try again.')