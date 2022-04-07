package tets;

import java.util.ArrayList;
import java.util.List;

public class Test {
	
	public static void main(String[] args) {
    // https://programmers.co.kr/learn/courses/30/lessons/12916?language=java
		List<String> pStore = new ArrayList<String>();
		List<String> yStore = new ArrayList<String>();
		
		String s = "pPoooyY";
		s = s.toLowerCase();
		for(int i = 0 ; i < s.length(); i++) {
			if(Character.toString(s.charAt(i)).equals("p")) {
				pStore.add(Character.toString(s.charAt(i)));
			}else if(Character.toString(s.charAt(i)).equals("y")) {
				yStore.add(Character.toString(s.charAt(i)));
			}
		}
		if(pStore.size() == yStore.size() || pStore.size() == 0 && yStore.size() == 0) {
			System.out.println("True");
		}else{
			System.out.println("False");
		}
		
		 
		
		
	}
	
}







