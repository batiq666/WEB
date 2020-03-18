import math
a = int(input())
b = int(input())
for x in range (a, b+1):
    s = int(math.sqrt(x))
    if s*s == x: 
        print (x, " ")