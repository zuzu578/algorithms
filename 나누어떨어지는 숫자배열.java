import java.util.*;
import java.util.stream.Collectors;
class Solution {
  // https://programmers.co.kr/learn/courses/30/lessons/12910?language=java
    public List<Integer> solution(int[] arr, int divisor) {
        List<Integer> result = new ArrayList<Integer>();
	
		for(int i = 0 ; i < arr.length ; i++) {
			if(arr[i] % divisor == 0) {
				result.add(arr[i]);
			}
			
		}
		if(result.size() == 0) {
			result.add(-1);
		}
        List<Integer >result2 = result.stream().sorted().collect(Collectors.toList());
		return result2;
      
    }
}
