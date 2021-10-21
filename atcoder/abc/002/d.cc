#include<iostream>
using namespace std;
int n,m,d[114][514];
main () {
  cin>>n>>m;
  for(int i=0;i<m;i++) {
    int x,y;cin>>x>>y;
    d[x][y]=d[y][x]=1;
  }
  int ans=0;
  for(int i=1;i<1<<n;i++) {
    int a[n];
    for(int j=0;j<n;j++) {
      if(i&(1<<j))a[
