a = int(input())
check = False
b = []
sum = 0
for i in range(a):
    b.append(int(input()))
for i in range(1, len(b)):
    if b[i]/math.fabs(b[i])== b[i-1]/math.fabs(b[i-1]):
        check = True
        break
if check:
    print('YES')
else:
    print('NO')