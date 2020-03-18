import math
a = int(input())
x = 1
while x<=a:
    s = int(math.sqrt(x))
    if s*s == x: 
        print (x, " ")
    x+=1