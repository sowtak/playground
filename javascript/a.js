var n = 16;
var i,j;
var a = new Array(n);
for(i=0;i<n;i++){ 
  a[i]=new Array(n);
}
console.log(a);

for(i=0;i<n;i++) {
  for(j=0;j<n;j++) {
    if(i==0&&j==0)a[i][j]="\\";
    else if(i==0&&j!=0)a[i][j]=j.toString(16).toUpperCase();
    else if(i!=0&&j==0)a[i][j]=i.toString(16).toUpperCase();
    else a[i][j]=(i*j).toString(16);
  }
}

console.log(a);
