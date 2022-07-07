coin = 0
answer = True

while (answer == True):
    want_a_coin = input("Do you want another coin? Yes/No")
    if want_a_coin.lower() == "yes":
        coin += 1
        print(f"You have {coin} coins.")
        
    elif want_a_coin.lower() == "no":
        answer = False
        print("Bye")
    


