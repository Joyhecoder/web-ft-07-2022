import pickle

#reading from a file

try:
    with open('phonebook.pickle', 'rb') as fh: 
        phonebook = pickle.load(fh)
        
except:
    phonebook = {}
    

    
# create each function for each choice 
def look_up():
    print("Who do you want to look up? >>")
    response = str(input())
    for name in phonebook:
        if name==response:
            print(f'''
                  Name: {response}
                  Found entry for {response}: {phonebook[response]}
                  ''')

def set_up():
    print("What is your name? >>")
    response_for_name = str(input())
    print("What is your phone number? >>")
    response_for_number = str(input())
    phonebook[response_for_name] = response_for_number  #look back here to add the input into phonebook
    print(f"Entry stored for {response_for_name}")

def delete_entry():
    print("Who do you want to delete? >>")
    response_for_name = str(input())
    print(f'Deleted entry for {response_for_name}')
    del phonebook[response_for_name]
    

def list_all():
    for info in phonebook:
        print(f'Found entry for {info}: {phonebook[info]}')
        

def quit():
    print("Bye.")
    with open('phonebook.pickle', 'wb') as fh:
        pickle.dump(phonebook, fh)
    
 
 
phonebook = {"joy": "123-222" }

#create the menu

while True:
    menu = """
    Electronic Phone Book
    =====================
    1. Look up an entry
    2. Set an entry
    3. Delete an entry
    4. List all entries
    5. Quit
    What do you want to do (1-5)?
    """
    print(menu)
    answer = int(input())

    if answer == 1:
        look_up()
        
    elif answer == 2:
        set_up()

    elif answer == 3:
        delete_entry()  
        
    elif answer == 4:
        list_all()
        
    elif answer == 5:
        quit()
        break
        
    
    
    
# with open('phonebook.pickle', 'wb') as fh:
#     pickle.dump(phonebook, fh)
    