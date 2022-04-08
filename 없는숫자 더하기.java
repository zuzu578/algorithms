package tets;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Test {
	/**
	 * 
	 * @param args
	 * 
	 */
	public static void main(String[] args) {
		// result => 14 
		int [] num = {1,2,3,4,6,7,8,0};
		
		Integer b[] = Arrays.stream(num).boxed().toArray(Integer[]::new); 
		int sum = 0;
		List<Integer> result = new ArrayList<Integer>();
		
		for(int i = 0 ; i < 10 ; i++) {
			if(Arrays.asList(b).indexOf(i) == -1) {
				result.add(i);
			}
		}
		
		for(int i = 0 ; i < result.size() ; i++) {
			sum = sum +result.get(i);
		}
		System.out.println(sum);

		
		 

	}
	
}







