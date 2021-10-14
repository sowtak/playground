def f(seq, sum):
    if seq[1] <= 4000000:
        if seq[1] % 2 == 0:
            sum += seq[1]
        seq[0], seq[1]=seq[1], seq[0]+seq[1]
        f([seq[0], seq[1]],sum)
    else: print(sum)

f([1,1], 0)
