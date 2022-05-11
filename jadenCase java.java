import java.util.*;
class Solution {
    public String solution(String s) {
        String [] test = s.split(" ");
        List<String> result = new ArrayList<String>();
        
        for(int i = 0 ; i < test.length; i++){
            if(!Character.isUpperCase(test[i].charAt(0))){
              result.add(Character.toUpperCase(test[i].charAt(0))+test[i].substring(1).toLowerCase());
            }
        }
       
        return String.join(" ", result);
    }
    
    
}
