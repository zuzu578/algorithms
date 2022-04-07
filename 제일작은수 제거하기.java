package tets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.OptionalInt;
import java.util.stream.Collectors;
import java.util.stream.IntStream;





public class Test {
	
	public static void main(String[] args) {
  // https://programmers.co.kr/learn/courses/30/lessons/12935?language=java
		ArrayList<Integer> number = new ArrayList<Integer>();
		ArrayList<Integer> tempList = new ArrayList<Integer>();
		// arr => paramter
		int [] arr =  {4,3,2,1};
		for(int i = 0 ; i < arr.length; i++) {
			number.add(arr[i]);
		}
		
		IntStream s1 = Arrays.stream(arr);
		
		OptionalInt num = s1.min();
		int minNum = num.getAsInt();
		int temp = number.indexOf(minNum); // 최소 값의 배열 index 를 구한다. 
		if(temp == 0) {
			tempList.add(-1);
			tempList.forEach(item->System.out.println(item));
		}
		number.remove(temp);
		number.forEach(item->System.out.println(item));
	
		
		
		 
		
		
	}
	
}







