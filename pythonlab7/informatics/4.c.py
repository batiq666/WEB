a = int(input())
b = []
sum = 0
for i in range(a):
    b.append(int(input()))
for i in b:
    if i>0:
        sum+=1
        
print(sum)