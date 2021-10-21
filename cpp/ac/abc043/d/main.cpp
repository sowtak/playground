#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <map>

using namespace std;

int main() {
  string s;
  cin>>s;
  int n=s.size();
  for (int i=1;i<n;i++) {
          if (s[i-1]==s[i]) {
              cout<<i<<" " << i+1<<endl;
              return 0; 
          }
          if (i>1 && s[i-2]==s[i]){
              cout << i-1 << " " << i+1 << endl;
              return 0; 
          }
  }
  cout << "-1 -1" << endl;
}

