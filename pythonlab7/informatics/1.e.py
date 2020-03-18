v = int(input())
t = int(input())
s = abs(v)*t
if s==0 : 
    print(0)
elif v>0 : 
    print(s%109)
else :
    print(109 - s%109)