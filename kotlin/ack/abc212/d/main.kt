

import java.util.Scanner
import java.util.PriorityQueue

fun main() {
	val input = Scanner(System.`in`)
	val queue = PriorityQueue<Long>()
	var sum = 0L
	repeat(input.nextInt()) {
		when (input.nextInt()) {
			1 -> queue.add(input.nextLong()-sum)
			2 -> sum += input.nextLong() 
			3 -> println(queue.poll() + sum)
		}
	}
	
}
