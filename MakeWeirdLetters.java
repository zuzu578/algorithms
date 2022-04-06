package tets;
import java.util.ArrayList;
import java.util.List;

public class Test {
	
	public static void main(String[] args) {
		List<String> a1 = new ArrayList<String>();
		String s = "try hello world";
		//TrY HeLlO WoRlD
		// 짝수 idx => 대문자 , 홀수 idx => 소문자 
		for(int i = 0 ; i < s.length() ; i ++) {
			if(i%2 ==0) {
				a1.add (Character.toString(s.charAt(i)).toUpperCase());
			}else {
				a1.add( Character.toString(s.charAt(i)).toLowerCase());
			}
		}
		String result = String.join("",a1);
		System.out.println(result);
		
		
	}
	
}






