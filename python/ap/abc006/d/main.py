import bisect
n,*C=map(int, open(0))
INF=10**9
dp=[INF]*n

for c in C:
    dp[bisect.bisect_left(dp, c)] = c
print(dp.count(INF))
