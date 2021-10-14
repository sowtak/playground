import sys
import numpy as np
 
read = sys.stdin.buffer.read
readline = sys.stdin.buffer.readline
readlines = sys.stdin.buffer.readlines

n,q=map(int, readline().split())
a=np.array(readline.split(), np.int64)
query=np.array(read().split(), np.int64).reshape()
