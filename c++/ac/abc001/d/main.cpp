#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <map>

using namespace std;

int main() {
 
  int n;cin>>n;vector<pair<int,int>>P;
  for(int i=0;i<n;i++) {
      pair<int,int>p;
      scanf("%d-%d", &p.first, &p.second);
      P.push_back(p);
  }
}

