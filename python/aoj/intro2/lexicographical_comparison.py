n=int(input())
a=list(map(int, input().split()))
m=int(input())
b=list(map(int, input().split()))
l=min(m,n)

for i in range(l):
    if a[i]<b[i]:print(1);exit()
    elif a[i]==b[i]:continue
    else: print(0);exit()

if(n>=m):print(0);exit()
else:print(1);exit()

