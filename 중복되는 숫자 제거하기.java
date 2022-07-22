import java.io.Console;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class App {

    static int j;
    static List<Integer> arr;

    public static void main(String[] args) {
        arr = Arrays.asList(1, 1, 7, 3, 7, 2, 2, 3, 4, 3, 0, 2, 2, 3, 1, 7, 6, 8, 4, 9);
        arr.sort((a, b) -> a - b);
        List<Integer> duplicatedList = new ArrayList<Integer>();

        for (int i = 0; i < arr.size() - 1; i++) {
            if (arr.get(i) == arr.get(i + 1)) {
                duplicatedList.add(arr.get(i));
            }
        }

        arr = arr.stream().distinct().collect(Collectors.toList());
        duplicatedList.forEach(item -> arr.remove(item));

        arr.forEach(item -> System.out.println(item));

    }
}

class Solution {

}
