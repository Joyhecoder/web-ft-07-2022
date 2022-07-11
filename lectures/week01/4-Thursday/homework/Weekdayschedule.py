weeks = ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7','Week 8','Week 9','Week 10']

days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

weeks_index = 0
days_index = 0

while weeks_index < len(weeks):
    print(weeks[weeks_index])
    while days_index < len(days):
        print(f"-{days[days_index]}")
        days_index += 1
    days_index=0
    weeks_index += 1