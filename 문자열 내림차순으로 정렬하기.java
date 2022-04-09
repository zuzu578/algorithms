import java.util.*;
import java.util.stream.Collectors;
class Solution {
    public String solution(String s) {
       List<String> word = new ArrayList<String>();
		String [] words = s.split("");
		for(int i = 0 ; i < words.length ; i++) {
			word.add(words[i]);
		}
		word = word.stream().sorted(Comparator.reverseOrder()).collect(Collectors.toList());
        return String.join("", word);
    }
}
