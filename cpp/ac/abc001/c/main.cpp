#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <map>
#include<cmath>

using namespace std;

int main() {
int deg;double dis;cin>>deg>>dis;
	string dir;
	int W;
	if(deg>112&&deg<=337)dir="NNE";
	else if(deg>337&&deg<=562)dir="NE";
	else if(deg>562&&deg<=787)dir="ENE";
	else if(deg>787&&deg<=1012)dir="E";
	else if(deg>1012&&deg<=1237)dir="ESE";
	else if(deg>1237&&deg<=1462)dir="SE";
	else if(deg>1462&&deg<=1687)dir="SSE";
	else if(deg>1687&&deg<=1912)dir="S";
	else if(deg>1912&&deg<=2137)dir="SSW";
	else if(deg>2137&&deg<=2362)dir="SW";
	else if(deg>2362&&deg<=2587)dir="WSW";
	else if(deg>2587&&deg<=2812)dir="W";
	else if(deg>2812&&deg<=3037)dir="WNW";
	else if(deg>3037&&deg<=3262)dir="NW";
	else if(deg>3262&&deg<=3487)dir="NNW";
	else dir="N";
	dis=round(dis/6.0);
	if(dis<=2)W=0,dir="C";
	else if(dis<=15)W=1;
	else if(dis<=33)W=2;
	else if(dis<=54)W=3;
	else if(dis<=79)W=4;
	else if(dis<=107)W=5;
	else if(dis<=138)W=6;
	else if(dis<=171)W=7;
	else if(dis<=207)W=8;
	else if(dis<=244)W=9;
	else if(dis<=284)W=10;
	else if(dis<=326)W=11;
	else W=12;
	cout<<dir<<" "<<W<<endl; 

}

