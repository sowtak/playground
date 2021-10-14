import numpy as np

X=np.array([[1,2,3],[4,5,6],[7,8,9]])
#U=np.array([1,1,1],dtype=((3,1)))
#V=np.array([1,1,1],dtype=((1,3)))
U=np.ones((3,1))
V=np.ones((3,1))
#print(U.shape, V.shape)

def update_uv(X, U, V):
    print(U*np.dot(X,V))
    print(np.dot(np.dot(U, V.T), V))
    U = U * np.dot(X, V) / np.dot(np.dot(U, V.T), V)
    print(V * np.dot(U.T, X).T)
    print(np.dot(U.T, np.dot(U, V.T)).T)
    V = V * np.dot(U.T, X).T / np.dot(U.T, np.dot(U, V.T)).T
    #return U, V
    print(U,V)
    print(np.dot(U,V.T))

#print(update_uv(X,U,V))
#print(np.dot(U, V.T))
update_uv(X,U,V)
