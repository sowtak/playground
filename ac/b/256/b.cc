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

int N, A[100],x;
ll ans;
int main() {
  cin>>N;
  vector<int>v;
  
  rep(i,0,N) {
    cin>>x;
    if(v.size()!=0)
      for(auto &e : v) {
        cout<<"iter"<<endl;
        if (e+x>=4) {
          remove(v.begin(), v.end(), e);
          ans+=1;
        } else {
          e += x;
        }
    }
    v.push_back(x);  
  }

  cout<<ans<<endl;
}
