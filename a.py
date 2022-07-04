from sys import stdin 

def readint():
    return int(stdin.readline())

def readarray(typ):
    return list(map(typ, stdin.readline().split()))

if __name__ == "__main__":
    K=readint()
    ans=""
    if K>=60:
        ans+="22:"
    else:
        ans+="21:"
    r=K%60
    if r<=9:
        ans+='0'
    else:
        pass
    ans+=str(K%60)
    print(ans)

