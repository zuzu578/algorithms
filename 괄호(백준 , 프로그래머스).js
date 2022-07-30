// 내가 풀었던방식

let input = '(()((())()(';
// ((()(  ((((
let answer = 'YES';
let left = 0;
let right = 0; 

const temp = input.split('()').filter(item=> item !== "");
const joinArrStr = temp.join('');

if(temp[0] === ')' || joinArrStr[0] === ')' ){
  answer = 'NO';
}
for(let i = 0 ; i < joinArrStr.length; i++){
  if(joinArrStr[i] === '('){
    left ++;
  }else {
    right ++;
  }
  
}
if(left !== right){
  answer = 'NO';
}
console.log(answer);



// 예전에 풀었던 내방식 + 다른사람 풀이 


2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
function solution(s){
    let answer = true;
    let arrS = [...s];// spread를 사용해서 s를 배열에 하나씩 나눔
    let left = 0; // "("을  위한 변수

    if(arrS[0] === ')') return false; // 1번째 문자가 ")"이면 false를 반환
    00
    for(let i = 0; i < arrS.length; i++){
        if(arrS[i]==='('){
            left++; //"("이면 left 1 증가  
        }else if(left >= 1 && arrS[i] === ')'){
            left--; // left가 1 이상이고 arrS[i]가 ')' 이면 left 감소
        }
    }
    if(left === 0){
        return true; //left가 0이면 true
    }else{
        return false; // 0이 아니면 false
    }

}
