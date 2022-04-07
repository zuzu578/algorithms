class Solution {
  // https://programmers.co.kr/learn/courses/30/lessons/12947?language=java
    public boolean solution(int x) {
        int sum = 0;
		String x1 = String.valueOf(x);
		String [] arr = x1.split("");
		for(int i = 0 ; i < arr.length; i++) {
			sum = sum+Integer.parseInt(arr[i]);
		}
		if(x % sum == 0) {
			return true;
		}else {
		    return false;
			
		}
    }
}
