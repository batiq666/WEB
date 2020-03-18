import math
a = int(input())
counter = 0
for x in range (1, int(math.sqrt(a))):
    if a%x == 0:
        counter+=1

if a%int(math.sqrt(a)) == 0: 
    print(counter*2+1)
else:
    print(counter*2)