package main
import "fmt"
func main() {
  var t,n,m
  fmt.Scan(&t,&n)
  a:=make([]int, n)
  for i:=0;i<n;i++ {
    fmt.Scan(&a[i])
  }
  var b
  j :=0
  for i:=0;i<m;i++ {
    fmt.Scan(&b)
    for ;j<n;j++ {
      
