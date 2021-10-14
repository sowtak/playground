import java.io.*;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) {
        InputStream is = System.in;
        OutputStream os = System.out;
        InputReader in = new InputReader(is);
		PrintWriter o = new PrintWriter(os);



        o.close();
    }


    static class InputReader {
        public BufferedReader reader;
        public StringTokenizer tokenizer;

        public InputReader(InputStream stream) {
            reader = new BufferedReader(new InputStreamReader(stream), 32768);
            tokenizer = null;
        }

        public String next() {
            while (tokenizer == null || !tokenizer.hasMoreTokens()) {
                try {
                    tokenizer = new StringTokenizer(reader.readLine());
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
            return tokenizer.nextToken();
        }

        public int ni() {return Integer.parseInt(next());}

		public int[] nia(int n) {
			int[] a=new int[n];
		   	for (int i = 0; i < n; i++) {
				a[i]=ni();
			}
			return a;
		}

        public long nl() {return Long.parseLong(next()); }

        public float nf() { return Float.parseFloat(next()); }

        public double nd() { return Double.parseDouble(next()); }
    }
}

