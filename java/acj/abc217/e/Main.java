import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.PriorityQueue;
import java.util.Scanner;

class Main {
	public static void main(String[] args) throws IOException {
		Scanner sc = new Scanner(new BufferedReader(new InputStreamReader(System.in)));		
		
		int q=sc.nextInt();
		// Stack2つでQueueを作る
		// ソートする代わりに1つ目のStackの中身をすべてPQに移し替える(O(log(n)))
		// Collection.sort() はO(nlog(n))
		PriorityQueue<Integer> pq=new PriorityQueue<>();
		ArrayDeque<Integer> ad=new ArrayDeque<>();
		for (int i=0;i<q;i++) {
			int t=sc.nextInt();
			if (t==1) {
				int x=sc.nextInt();
				ad.offer(x);
			} else if(t==2) {
				if (!pq.isEmpty()) System.out.println(pq.poll());
				else System.out.println(ad.poll());
			 }else {
				while(!ad.isEmpty()) pq.add(ad.removeFirst());
			}
		}
		
	}
}
