a = int(input())
sum = 0
b = []
sum = 0
for i in range(a):
    b.append(int(input()))
for i in range(1, len(b)-1):
    if b[i]>b[i+1] and b[i]>b[i-1]:
        sum = sum+1
print(sum)