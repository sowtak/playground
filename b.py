from sys import stdin 

def readint():
    return int(stdin.readline())

def readarray(typ):
    return list(map(typ, stdin.readline().split()))

def readmatrix(n):
    M = []
    mx = 0
    for _ in range(n):
	    row = readarray(int)
	    assert len(row) == n
	    M.append(row)
	return M

if __name__ == "__main__":
    N=readint()
    M=readmatrix(N)

    ans=""
    for _ in range(N-1):
        for i in [1,0,-1]:
            for j in [0, -1, 1]:
                
