char s[3333],t[3333];
p[3333][3333];
i,j;
A(a){i--*j--?(a=s[i])-t[j]?A(p[i+1][j+1]-p[i][j+1]?i++:j++):putchar(a,A()):0;}
int main(){
  gets(s);
  for(gets(t);t[j]?:s[++i]&&!(j=0);j++) {
    p[i+1][j+1]=s[i]-t[j]?fmax(p[i+1][j],p[i][j+1]):p[i][j]+1;A();
  }
}
