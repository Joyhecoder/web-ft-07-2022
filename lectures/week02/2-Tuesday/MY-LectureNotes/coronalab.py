import corona  #object


# California
# cases: 1106235 
# recovered: 899579
# active: 186438

data = [
    {
        "state": "Texas",
        "updated": 1605632030467,
        "cases": 1106235,
        "todayCases": 0,
        "deaths": 20218,
        "todayDeaths": 0,
        "recovered": 899579,
        "active": 186438,
        "casesPerOneMillion": 38151,
        "deathsPerOneMillion": 697,
        "tests": 10395826,
        "testsPerOneMillion": 358528,
        "population": 28995881
    },
    {
        "state": "California",
        "updated": 1605632030467,
        "cases": 1044896,
        "todayCases": 0,
        "deaths": 18304,
        "todayDeaths": 0,
        "recovered": 518461,
        "active": 508131,
        "casesPerOneMillion": 26445,
        "deathsPerOneMillion": 463,
        "tests": 21068894,
        "testsPerOneMillion": 533225,
        "population": 39512223
    }
]

index = 0

for info in data:
    print(data[index]["state"])
    print(data[index]["cases"])
    print(data[index]["recovered"])
    print(data[index]["active"])
    
    index += 1
    
