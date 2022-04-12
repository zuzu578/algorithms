import java.util.stream.Stream;
import java.util.*;
class Solution {
    public long solution(int n) {
       Prime p = new Prime();
		List<Integer> myPrimeArr = new ArrayList<Integer>(); 
	    for(int i = 1 ; i <= n ; i++){
	        int result = p.checkPrime(i);
	        myPrimeArr.add(result);
	    }
	   Stream<Integer> resultnum =  myPrimeArr.stream().filter(item->item!=0 && item!=1);
	   long cnt = resultnum.count(); // n 숫자에 대한 소수개수 
	   return cnt;
	

    }
}
class Prime{
     int checkPrime(int n) {
		List<Integer> number = new ArrayList<Integer>();
		
		for(int i =1 ; i <= n; i++) {
			 if(n == 1){
				 continue;
			    }
			    if(n%i == 0 && i!=1){
			     
			      number.add(i);
			    }
			  }
			  if(number.size() >=2){
		
				  return 0;
			  }else{
			     return n;
			  }
			
	}
    
}

