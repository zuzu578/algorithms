import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

class Solution {
    public boolean solution(String[] phone_book) {
        boolean result = true;
		List<String> names = Arrays.asList(phone_book);
		Stream<String> a = names.stream().filter(x -> x.contains(phone_book[0]) && !x.equals(phone_book[0]));
		if(a.count() != 0) {
			result = false;
		}
        return result;
       
    }
}
