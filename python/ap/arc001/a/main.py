import sys
 
read = sys.stdin.buffer.read
readline = sys.stdin.buffer.readline
readlines = sys.stdin.buffer.readlines

input()
s=input()
cnt=[s.count(x) for x in '1234']
print(max(cnt), min(cnt))

