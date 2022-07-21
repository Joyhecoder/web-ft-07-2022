#1 create a loop that counts from 100 to 0 by increments of 5.
# for example
# 100, 95, 90, 85 ...



#for loop
new_list = []

for num in reversed(range(0, 101)):
    
    if num % 5 == 0:
        new_list.append(num)
      
        num -=5
    
print(new_list)

#------different solution:
for i in range(100, -1, -5):
    print(i)


#while loop
num = 105
while num > 0:
    num -= 5
    print(num)
    


#2.# in the dictionary below, extract the following 

user = {
    "id": 5487,
    "uid": "7b98255c-be80-483e-a508-1edbc9ffcc58",
    "password": "vtN0KSaejW",
    "first_name": "Regina",
    "last_name": "O'Keefe",
    "username": "regina.o'keefe",
    "email": "regina.o'keefe@email.com",
    "avatar": "https://robohash.org/anihilexcepturi.png?size=300x300&set=set1",
    "gender": "Genderfluid",
    "phone_number": "+240 441.465.1205 x2861",
    "social_insurance_number": "471267534",
    "date_of_birth": "1964-08-23",
    "employment": {
        "title": "Forward Consulting Producer",
        "key_skill": "Networking skills"
    },
    "address": {
        "city": "West Rivabury",
        "street_name": "Kassulke Key",
        "street_address": "63277 Sarita Neck",
        "zip_code": "06366",
        "state": "Illinois",
        "country": "United States",
        "coordinates": {
        "lat": -11.987728561637226,
        "lng": -124.02257039722036
    }
    },
    "credit_card": {
        "cc_number": "5228-8351-1376-5139"
    },
    "subscription": {
        "plan": "Professional",
        "status": "Active",
        "payment_method": "Google Pay",
        "term": "Annual"
    }
}
# first_name 
first = user ["first_name"]
print( first)
# last_name 
print(user["last_name"])
# user's employement title 
print(user["employment"]["title"])
# user's key_skills
print(user["employment"]["key_skill"])
# user's street address
print(user["address"]["street_address"])
# user's city 
print(user["address"]["city"])
# user's credit card number 
print(user["credit_card"]["cc_number"])
# user's subscription plan
print(user["subscription"]["plan"])
