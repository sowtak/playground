// readLine()!!.trim().split(' ').map(String::toInt)
// IntArray(n) { do something }

fun main() {
	
	var x=readLine()!!.trim().split(" ").map{ it.toInt()}.max()
	println(x)
	
}
