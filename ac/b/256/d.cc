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

int N,L,R, mx, mn;
int main() {
  cin>>N;
  vector<pair<int, int>>v;
  rep(i,0,N){
    cin>>L>>R;
    if(i==0)
      mn=L,mx=R;
    else {
      if (L>mx) {
        v.push_back(make_pair(mn,mx));
        mn = L;
        mx = R;
      } else {
        if (R>mx)
          mx=R;
      }
    }
  }
  v.push_back(make_pair(mn,mx));

  rep(i,0,(int)v.size())
    cout<<v[i].first<<' '<<v[i].second<<endl;

}
