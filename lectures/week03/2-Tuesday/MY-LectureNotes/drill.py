# 1. Determine the total distance travelled and the
# total time it takes to get there by summing up
# the total distance and the total time in the list below

trips = [
    { "distance": 34, "time": 10 },
    { "distance": 90, "time": 50 },
    { "distance": 59, "time": 25 },
    { "distance": 83, "time": 60 },
    { "distance": 27, "time": 15 },
    { "distance": 68, "time": 90 }
]
#total distance
distance = trips[0]['distance'] + trips[1]['distance'] +trips[2]['distance']+trips[3]['distance']+trips[4]['distance']+trips[5]['distance']
print(distance)

#total time
time = trips[0]['time'] + trips[1]['time'] +trips[2]['time']+trips[3]['time']+trips[4]['time']+trips[5]['time']
print(time)

#----------------------------loop solution----------------------------#
sum_of_distance = 0
sum_of_time = 0
for i in trips:
    sum_of_distance += i['distance']
    sum_of_time += i['time']
print(sum_of_distance )
print(sum_of_time)



# 2. Implement a 'pluck' function. 
# Pluck should accept a list and a string representing a 
# property name and return a list containing that property from each object.

# example
paints = [{"color": 'red', "text-align": "right"}, {"color": 'blue', "margin": "0px"}, {"color": 'yellow', "padding": "5px"}]
# pluck(paints, 'color')
# returns =>>>>> ['red', 'blue', 'yellow']

def plunk(list, string):
    new_list = []
    for index in list:
        new_list.append(index[string])
    print(new_list)
        
plunk(paints, "color")
    
    