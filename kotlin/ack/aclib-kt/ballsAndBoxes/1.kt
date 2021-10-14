fun main() {
	val MOD = 1000000007
	val n = readLine()!!.trim().toInt()
	val k = readLine()!!.trim().toInt()

	var ans: Long = 1
	for ( i in 0..n) {
		ans *= k
		ans %= MOD
	}
	println(ans)
}
