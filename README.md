# algorithms
https://programmers.co.kr/learn/challenges

https://www.acmicpc.net/step 백준 

프로그래머스 level 1 ~ 2 까지 문제풀이 
매일 매일 하루에 1~ 2 문제씩 풀어보자.

# stack , que
1) stack
한 쪽 끝에서만 자료를 넣고 뺄 수 있는 LIFO(Last In First Out) 형식의구조 
```javascript
const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.pop());


```
2) queue
(First-In-First-Out)
```javascript
먼저 삽입한 데이터가 먼저 나옴 
const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.shift());

```


# graph Search (그래프 검색)
그래프 검색에는 두가지의 종류가 있다.

# dfs (깊이 우선 탐색)

![Depth-First-Search](https://user-images.githubusercontent.com/69393030/178735703-8779f47c-b11d-4317-a2e1-8adf608e12c8.gif)

깊이 우선 탐색이란 
탐색트리의 최근에 첨가된 노드를 선택하고, 이 노드에 적용 가능한 동작자 중 하나를 적용하여 트리에 다음 수준(level)의 한 개의 자식노드를 첨가하며, 첨가된 자식 노드가 목표노드일 때까지 앞의 자식 노드의 첨가 과정을 반복해 가는 방식이다
이때 

자식 노드를 찾고나서 다시 되돌아가서 또다른 자식 노드를 찾는 것을 백트래킹 (backtracking) :해를 찾는 도중 해가 아니어서 막히면, 되돌아가서 다시 해를 찾아가는 기법 이라고 한다.


보통 dfs 관련된 알고리즘 문제는 재귀함수 + stack 을 사용한다. 


