n,m,x=map(int,input())
a=[list(map(int,input().split())) for _ in range(n)]
#print(a)
ans=10**9
for i in range(2**n):
    cost=0
    skill=[0]*m
    for j in range(n):
        if i>>j&1:
            cost += a[j][0]
            for k in range(1,m+1):
                skill[k-1]+=a[j][k]
    ok=True
    for m in range(m):
        if skill[m]<x:
            ok=False
            break
    if ok:
        ans=min(ans, cost)
if ans==10**9:
    print(-1)
else:print(ans)

