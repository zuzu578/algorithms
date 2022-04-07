package tets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.OptionalInt;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;





public class Test {
	
	public static void main(String[] args) {
		// n => to string => split => sort()
		long n = 118372;
		String temp1 = Long.toString(n);
		String [] wordsArr = temp1.split("");
		Stream<String> s1 = Arrays.stream(wordsArr);
		List<String> result = s1.sorted(Comparator.reverseOrder()).collect(Collectors.toList());
		Long.parseLong(String.join("", result));


		
		
		
		 
		
		
	}
	
}







