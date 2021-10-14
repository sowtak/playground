import sys
import numpy as np
 
read = sys.stdin.buffer.read
readline = sys.stdin.buffer.readline
readlines = sys.stdin.buffer.readlines

N,W=map(int, readline().split())
dp = np.zeros(N, dtype=np.int64)

for _ in range(N):
    w, v = map(int, readline().split())
    np.maximum(dp[w:], dp[:-w] + v, out=dp[w:])

print(dp.max())
