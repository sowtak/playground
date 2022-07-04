from sys import stdin 

def readint():
    return int(stdin.readline())

def readarray(typ):
    return list(map(typ, stdin.readline().split()))

def readmatrix(n):
    mat = []
    for _ in range(n):
        row = readarray(int)
        assert len(row) == n
        mat.append(row)
    return mat

def mult(mat, v):
    n = len(mat)
    return [sum(mat[i][j] * v[j] for j in range(n)) for i in range(n)]


