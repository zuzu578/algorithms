import java.util.*;
class Solution {
    public int solution(int[] absolutes, boolean[] signs) {
       int resultNumber = 0;
		List<Integer> result = new ArrayList<Integer>();
		for(int i = 0 ; i < absolutes.length ; i++) {
			if(signs[i] == false) {    // 음수인 경우 
				result.add(absolutes[i] * -1);
			}else {	                  // 양수인 경우 
				result.add(absolutes[i]);
			}
		}
		for(int i = 0 ; i < result.size() ; i++) {
			resultNumber = resultNumber+ result.get(i);
		}
	
        return resultNumber;
    }
}
