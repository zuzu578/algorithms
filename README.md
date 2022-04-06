# algorithms
프로그래머스 level 1 ~ 2 까지 문제풀이 

1) 이상한 문자 만들기 
https://programmers.co.kr/learn/courses/30/lessons/12930?language=java
<img width="461" alt="스크린샷 2022-04-07 오전 2 27 26" src="https://user-images.githubusercontent.com/69393030/162033201-eaf1a0c4-7f8d-4aad-a3e4-87f07ff6033e.png">


```java 

import java.util.*;

class Solution {
    public String solution(String s) {
        List<String> a1 = new ArrayList<String>();
		for(int i = 0 ; i < s.length() ; i ++) {
			if(i%2 ==0) {
				a1.add (Character.toString(s.charAt(i)).toUpperCase());
			}else {
				a1.add( Character.toString(s.charAt(i)).toLowerCase());
			}
		}
		String result = String.join("",a1);
        return result;
    }
}

```
