a = int(input())
b = []
sum = 0
for i in range(a):
    b.append(int(input()))
for i in range(1, len(b)):
    if b[i]>b[i-1]:
        sum+=1
print(sum)