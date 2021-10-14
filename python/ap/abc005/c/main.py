import sys
 
read = sys.stdin.buffer.read
readline = sys.stdin.buffer.readline
readlines = sys.stdin.buffer.readlines

t=int(readline())
n=int(readline())
a=list(map(int, readline().split()))
m=int(readline())
b=list(map(int, readline().split()))

for i in b:
    for j in a:
        
