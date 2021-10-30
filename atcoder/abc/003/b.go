package main
import "fmt"
func main() {
	var s,t string
	fmt.Scan(&s,&t)
	if s==t {
		exit(0);
	}
	ok:=false
	a,b:=0,0
	for i:=0;i<len(s);i++ {
		if s[i]==t[i] {
			continue
		} 

		
