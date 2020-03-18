import math
a = int(input())
i = 2
answerOutput = False
for x in range (2, int(math.sqrt(a))+1):
    if a%x == 0:
        print(x)
        answerOutput = True

if answerOutput == False: 
    print(a)