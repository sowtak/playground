#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <map>
#include <cmath>
#include <iomanip>

using namespace std;



int main() {
 
  int x,y,x1,y1,x2,y2;cin>>x>>y>>x1>>y1>>x2>>y2;
  x1-=x, y1-=y, x2-=x, y2-=y;
  printf("%.1f\n", fabs(x1*y2-x2*y1)/2);
  
  
}

