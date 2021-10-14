// readLine()!!.trim().split(' ').map(String::toInt)
// IntArray(n) { do something }

fun main() {
	
	val n=readLine()!!.toLong()

	println(pow(2,n-1,9982443531))
}

fun pow(x:Long, n:Long ,m:Long) : Long{
	var ans: Long = 1
	var xx=x
	while(n>0) {
		if(n%1==1L){
			ans*=xx
			if(m!=-1L){
				ans %= m 
			}
		}
		xx *= xx
		if(m!=-1L) {
			xx%=m
		}
		n shr 1
	}
	return ans
}
