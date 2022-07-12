todos= ["""
        1. Pet your cat
        2. Grocery shop
        3. Check mails
        """]
def to_do_func(letter):
        
        if letter.lower() == 'p':
            
            count = 1
            for todo in todos:
                print("%d. %s" % (count, todo))
                count += 1
            return 
           
        elif letter.lower() == 'a':
            your_response = input(f"What would you like to add? >> ")
            todos.append(your_response)
            return 
        elif letter.lower() == 'r':
            your_response = int(input(f"Which item would you like to replace? >> "))
            your_replacement = input(f"What are you replacing '{your_response}' with? >> ")
            todos[your_response - 1] = your_replacement
            return
        elif letter.lower() == 'd':
            your_response = int(input(f"Which item would you like to delete? >> "))
            del todos[your_response - 1]
            return
        elif letter == '':
            print("Goodbye.")
            return
        
        else:
            print(f"""
                '{letter}' is not a valid entry, please try again.
                """)
            return 
    
count = 1
for todo in todos:
    print("%d. %s" % (count, todo))
    count += 1    
    
while True:
    
    
        
    letter = input(f"""Choose an action:
                     
P: Print your to-do list
A: Add a to-do item
R: Replace a to-do item
D: Delete a to-do item

>> """)
    to_do_func(letter)  
  
    


#------------------------------------in class solution-------------------------------#

todos = ["pet the dog", "check the mail", "cook dinner"] #global variable 

def print_todos():
    count = 1
    for todo in todos:
        print("%d. %s" % (count, todo))
        count += 1


def add_todo():
    your_response = input(f"What would you like to add? >> ")
    todos.append(your_response)


def replace_todo():
    your_response = int(input(f"Which item would you like to replace? >> "))
    your_replacement = input(f"What are you replacing '{your_response}' with? >> ")
    todos[your_response - 1] = your_replacement

def delete_todo():
    your_response = int(input(f"Which item would you like to delete? >> "))
    del todos[your_response - 1]

def main():

    while True:
        
        # looping through the todo list and printing them out.
        print_todos()
            
        response = input(f"""Choose an action:

    P: Print your to-do list
    A: Add a to-do item
    R: Replace a to-do item
    D: Delete a to-do item

    >> """)
        if response.lower() == 'p':
            
           print_todos()
                
        elif response.lower() == 'a':
            add_todo()
            
        elif response.lower() == 'r':
            replace_todo()
        
        elif response.lower() == 'd':
            delete_todo()
            
        elif response == '':
            print("Goodbye.")
            break
        
        else:
            print(f"""
                '{response}' is not a valid entry, please try again.
                """)
            
main()

