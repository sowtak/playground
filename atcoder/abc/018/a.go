package main

import (
	"bufio"
	"os"
	"strconv"
  "fmt"
)

var sc, wr = bufio.NewScanner(os.Stdin), bufio.NewWriter(os.Stdout)

func ns() string { sc.Scan(); return sc.Text()}
func nr() []rune { return []rune(ns()) }
func ni() int { a, _ := strconv.Atoi(ns()); return a}
func ni64() int64 { a, _ := strconv.ParseInt(ns(), 10, 64); return a}
func nf() float64 { a, _ := strconv.ParseFloat(ns(), 64); return a}
func nis(n int) []int {a := make([]int, n);for i:=0;i<n;i++ {a[i] = ni()};return a}

func main() {
	defer wr.Flush()
	sc.Split(bufio.ScanWords)
	sc.Buffer(make([]byte, 1001), 1001001)
 
  r:=[]int{0,0,0}
  max:=0
  a:=ni()
  if a>max {
    max=a
  }
  b:=ni()
  if b>max {
    max=b
    r[0]++
  }else if b<max{
    r[1]++
  }
  c:=ni()
  if c>max {
    r[0]++
    r[1]++
  }else if c<max {
    if a>c && b>c {
      r[2]+=2
    } else {
      r[2]++
    }
  }
  for i:=0;i<3;i++ {
    fmt.Println(r[i]+1)
  }
}
