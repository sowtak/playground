# TLE
#import sys
#import numpy as np
#read = sys.stdin.buffer.read
#readline = sys.stdin.buffer.readline
#readlines = sys.stdin.buffer.readlines
#
#N,K=map(int, readline().split())
#h=list(map(int, readline().split()))
#
#INF=1<<60
#dp = [INF] * (N)
#dp[0]=0
#
#for i in range(N):
#    for j in range(1,K+1):
#        if i+j<N:dp[i+j] = min(dp[i+j], dp[i]+abs(h[i+j]-h[i]))
#
#print(dp[-1])

import sys
import numpy as np
from numba import njit, b1, i4, i8, f8

read = sys.stdin.buffer.read
readline = sys.stdin.buffer.readline
readlines = sys.stdin.buffer.readlines

def from_readline(dtype=np.int64):
    return np.fromstring(readline().decode(), dtype=dtype, sep=' ')

N,K=map(int, readline().split())
h=from_readline()

@njit((i8, i8, i8[:]), cache=True)
def main(N,K,h):
    INF = 1 << 60
    dp = np.full(N, INF, np.int64)
    dp[0]=0
    for i in range(N):
        for j in range(1,K+1):
            if i+j<N: dp[i+j] = min(dp[i+j], dp[i]+abs(h[i+j]-h[i]))
    return dp[-1]

print(main(N,K,h))
