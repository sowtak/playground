// readLine()!!.trim().split(' ').map(String::toInt)
// IntArray(n) { do something }

fun main() {
	
	
	
}

internal class MinCostFlow(var N: Int) {
	val INF=1 shr 29
	var graph: ArrayList<ArrayList<Edge>>

	init {
		this.graph = ArrayList<ArrayList<Edge>>()
		for(i in 0..N-1) {
			graph.add(ArrayList<>())
		}
	}

	fun addEdge(from:Int, to:Int, cap:Int, cost: Int) {
		graph[from].add(Edge(to, cap, cost, graph[to].size))
	}
}
