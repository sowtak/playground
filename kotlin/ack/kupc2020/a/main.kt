

fun main() {
	
	val n = readLine()!!.toInt()
	var sum=0
	
	var (x,y)=readLine()!!.split(' ').map {it.toInt()}
	for(i in 1..n-1) {
		var(xtmp, ytmp)=readLine()!!.split(' ').map{it.toInt()}
		sum+=Math.abs(x-xtmp)+Math.abs(y-ytmp)
		x=xtmp
		y=ytmp
	}
	println(sum)
}
