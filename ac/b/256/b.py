import itertools
from sys import stdin 

def readint():
    return int(stdin.readline())

def readarray(typ):
    return list(map(typ, stdin.readline().split()))

if __name__ == "__main__":
    n = readint()
    a = readarray(int)
    b = []
    ans = 0
    for x in a:
        if len(b) != 0:
	        for i in range(len(b)):
	            if b[i] + x >= 4:
	                b.pop(i)
	                ans += 1
	            else: 
	                b[i] += x
        b.append(x)
            
    print(ans)
