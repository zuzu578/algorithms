import java.util.stream.IntStream;
import java.util.*;
class Solution {
    public long solution(int a, int b) {
        int num1 = 0;
        int num2 = 0;
        if(a>b){
          num1 = b;
          num2 = a;
          a = num1;
          b = num2;
            
        }
        if( a == b){
            return a;
        }
   
		IntStream stream3 = IntStream.rangeClosed(a, b);
		int result = stream3.sum();
        return result;
    }
}
