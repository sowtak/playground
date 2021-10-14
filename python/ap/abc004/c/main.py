import sys

read = sys.stdin.buffer.read
readline = sys.stdin.buffer.readline
readlines = sys.stdin.buffer.readlines

n = int(read())

n %= 30

nums = list(range(1,7))
for i in range(n):
    nums[i%5], nums[i%5+1] = nums[i % 5 + 1], nums[i % 5]

print(*nums, sep='')

