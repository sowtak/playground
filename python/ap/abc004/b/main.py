#import sys
# 
#read = sys.stdin.buffer.read
#readline = sys.stdin.buffer.readline
#readlines = sys.stdin.buffer.readlines
#
#a,b,c,d,_=read().decode().split('\n')
#for i in (d,c,b,a):
#    print(i[::-1])

print(open(0).read()[-2::-1])
