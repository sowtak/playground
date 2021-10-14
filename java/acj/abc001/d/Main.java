import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.BitSet;
import java.util.Scanner;

class Main {
	public static void main(String[] args) throws IOException {
		Scanner sc = new Scanner(new BufferedReader(new InputStreamReader(System.in)));		
    		int n=sc.nextInt();
		BitSet b=new BitSet();
		for(int i=0;i<n;++i) {
			String[]v=sc.next().split("-");
			int f=Integer.parseInt(v[0]),t=Integer.parseInt(v[1]);
			b.set((f/100*60+f%100)/5*5,(t/100*60+t%100+4)/5*5+1);
		}
		for(int i=b.nextSetBit(0),j=b.nextClearBit(i);
				i!=-1;
				i=b.nextSetBit(j),j=b.nextClearBit(i+1))
			System.out.printf("%04d-%04d\n",i/60*100+i%60,j/60*100+(j-1)%60);
	 // int n = sc.nextInt();
   // BitSet b = new BitSet();
   // for (int i= 0;i<n;++i) {
   //   String[] v= sc.next().split("-");
   //   int f=Integer.parseInt(v[0]), t=Integer.parseInt(v[1]);
   //   b.set((f/100*60+f%100)/5*5, (t/100*60+t%100+4)/5*5+1);
   // }

   // for (int i=b.nextSetBit(0), j=b.nextClearBit(i); i!=-1; i=b.nextSetBit(j), j=b.nextSetBit(i+1))
   // {
   //   System.out.printf("%04d-%04d\n", i/60*100+i%60, j/60*100+(j-1)%60);
   // }

	
}
}
