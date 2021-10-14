n,*a=map(int, open(0).read().split())
ans=-10**9
for l in range(n):
    pick=a[l]
    for r in range(l,n):
        pick=min(pick,a[r])
        ans=max(ans,pick*(r-l+1))
print(ans)
