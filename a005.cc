#include<iostream>
#include<cstdlib>
using namespace std;
int a,b,n,remaining;
int p[810];
int main() {
  cin>>a>>b>>n;
  for(int i=0;i<n;i++){
    char c;cin>>c;
    if(c=='G')p[i]=0;
    else if(c>='1' && c<='9')p[i]=c-'0';
    else p[i]=10;
    cout<<p[i]<<' ';
  }
  
  bool flag=false, isLastFrameFirstStrike=false, isLastFrameSecondStrike=false;
  int frame=0;
  int ans =0;
  // フレームの1投目を投げたらflag=true;
  for(int i=0;i<n;i++) {

    if(!flag) {
     
      remaining = b;
      if(p[i]==b) {

        if(frame==n-1) {
          if(!flag && !isLastFrameFirstStrike) {
            if(p[i]==b)isLastFrameFirstStrike=true;
            ans+=b;
            flag=true;
          }

          if(isLastFrameFirstStrike) {
            if(p[i]==b)isLastFrameSecondStrike=true;
            ans+=2*b;
          } 

          if(isLastFrameSecondStrike) {
            ans+=3*p[i];
            flag=false;
          }
        } else {
          ans+=b+(p[i+1]+p[i+2]);
          frame++;
        }
      } else {
          remaining-=p[i];
          flag=true;
          ans+=p[i];
      }
    } else {
        if(remaining-=p[i]==0) {
          if(frame==n-1) {
            ans+=2*p[i+1];
          }
          ans+=p[i]+p[i+1];
          flag=false;
          frame++;
      } else {
          ans+=p[i];
          flag=false;
          frame++;
      }
    }
    //cout<<ans<<endl;
  }
  cout<<ans<<endl;
}
