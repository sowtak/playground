#include <iostream>
#include <iomanip>
#include <bitset>
#include <vector>
#include <map>
#include <unordered_map>
#include <queue>
#include <stack>
#include <unordered_set>
#include <set>
#include <algorithm>
#include <functional>
#include <numeric>
#include <cmath>
#include <cstring>
#define ll long long
#define rep(idx,b,e) for(int idx=(b);idx<e;idx++)
#define rrep(idx,b,e) for(int idx=b;idx>e;idx--)
template <typename T> inline bool chmin(T &a, T &b) {if (a>b){a=b; return true;} else return false;}
template <typename T> inline bool chmax(T &a, T &b) {if (a<b){a=b; return true;} else return false;}
using namespace std;

const int MOD = 1000000007;
const int MOD2 = 998244353;
const int MAX = 2147483647;


int N, mx,x,y;
char G[10][10];
char input[10];
bool used[10][10];

int main() {
  cin>>N;
  rep(i,0,N){
    cin>>input;
    rep(j,0,N) {
      if(input[j]>mx){
        y=i,x=j;
        mx=int(input[j])-48;
      }
      G[i][j]=input[j]-48;
    }
  }

  //rep(i,0,N){
  //  rep(j,0,N){
  //    cout<<G[i][j];
  //  }
  //  cout<<endl;
  //}
  used[y][x]=true;
  string ans="";
  ans+=char(G[y][x]);
  int dxa[3]={0,-1,1};
  int dya[3]={0,1,-1};
  int mx2=0, nx=0, ny=0;
  for(;--N;) {
    mx2=0;
    for(auto dx: dxa) {
      for(auto dy: dya) {
        int tmpx=(x+dx)%N;
        int tmpy=(y+dy)%N;
        if (tmpx<0)
          tmpx+=N;
        if (tmpy<0)
          tmpy+=N;
        int nxtv=G[tmpy][tmpx];
        //cout<<nxtv<<' '<<tmpx<<' '<<tmpy<<endl;
        if(mx2<nxtv && !used[tmpy][tmpx]){
          nx=tmpx;
          ny=tmpy;
          mx2=nxtv;
        }
      }
    }
    ans+=G[ny][nx]-97;
    used[ny][nx]=true;
    x=nx, y=ny;
  }
  
  cout<<ans<<endl;
}
