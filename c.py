from sys import stdin 

def readint():
    return int(stdin.readline())

def readarray(typ):
    return list(map(typ, stdin.readline().split()))

if __name__ == "__main__":
    N,Q=map(int, input().split())
    S=input()
    for _ in range(Q):
        q, n = map(int, input().split())
        if q == 1:
            for _ in range(n):
                S=S[N-1:]+S[:N-1]
        else:
            print(S[n-1])
