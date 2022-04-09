import java.util.*;


class Solution {
  // https://programmers.co.kr/learn/courses/30/lessons/87389?language=java
    public int solution(int n) {
       List<Integer> number = new ArrayList<Integer>(); 
		for(int i = 1 ; i <= n ; i++) {
			if(n%i ==1) {
				number.add(i);
			}
		}
		return Collections.min(number);
		
		 
    }
}
