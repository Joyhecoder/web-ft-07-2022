#### 1. Tip Calculator
total_bill_amount = input("Total bill amount? ")
total_bill_amount = int(total_bill_amount)
# print(type(total_bill_amount))
level_of_service = input("""Level of service? 
                         1. good
                         2. fair
                         3. bad """)
level_of_service = int(level_of_service)

number_of_people = input("Split how many ways? ")
number_of_people = int(number_of_people)

if level_of_service == 1:
    tip_amount = total_bill_amount * 0.20
    total_amount = total_bill_amount + tip_amount
    result = "Tip amount: ${: .2f}"
    total_result = "Total amount: ${: .2f}"
    amount_per_person = total_amount / number_of_people
    person_result = "Amount per person: ${: .2f}"
    print(f"Total bill amount? {total_bill_amount}")
    print("Level of service? Good")
    print(result.format(tip_amount))
    print(total_result.format(total_amount))
    print(person_result.format(amount_per_person))
    
elif level_of_service == 2:
    tip_amount = total_bill_amount * 0.15
    total_amount = total_bill_amount + tip_amount
    result = "Tip amount: ${: .2f}"
    total_result = "Total amount: ${: .2f}"
    amount_per_person = total_amount / number_of_people
    person_result = "Amount per person: ${: .2f}"
    print(f"Total bill amount? {total_bill_amount}")
    print("Level of service? Fair")
    print(result.format(tip_amount))
    print(total_result.format(total_amount))
    print(person_result.format(amount_per_person))
    
elif level_of_service == 3:
    tip_amount = total_bill_amount * 0.10
    total_amount = total_bill_amount + tip_amount
    result = "Tip amount: ${: .2f}"
    total_result = "Total amount: ${: .2f}"
    amount_per_person = total_amount / number_of_people
    person_result = "Amount per person: ${: .2f}"
    print(f"Total bill amount? {total_bill_amount}")
    print("Level of service? Bad")
    print(result.format(tip_amount))
    print(total_result.format(total_amount))
    print(person_result.format(amount_per_person))
    
else:
    print("Please enter a valid number")
         
         
    