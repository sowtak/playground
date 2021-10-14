import sys
 
read = sys.stdin.buffer.read
readline = sys.stdin.buffer.readline
readlines = sys.stdin.buffer.readlines

s=input()
while len(s)>0:
    if s[-7:] == "dreamer":
        s=s[:-7]
        continue
    elif s[-5:] == "dream":
        s=s[:-5]
        continue
    elif s[-5:] == "erase":
        s=s[:-5]
        continue
    elif s[-6:] == "eraser":
        s=s[:-6]
        continue
    break
if len(s)==0:
    print("YES")
else: 
    print("NO")
