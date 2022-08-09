// https://www.acmicpc.net/problem/1543 문서검색 
const target = 'qweeqweeqwe';
const compare = 'qwe';

let appendStr = '';
let count = 0;
// target 문자열 갯수만큼 반복 
for(let i = 0 ; i < target.length ; i ++) {
  // 문자열을 붙인다 ex) a => ab => aba 
  appendStr += target[i];
  // 비교하려는 문자열 의 첫글자와 붙인 문자열의 첫글자가 같지 않을경우 초기화 
  if(compare[0] !== appendStr[0]){
    appendStr ='';
  }
  // 비교하려는 문자열과 붙인 문자열이 같다면 count 를 증가시키고 초기화 
  if(appendStr === compare){
    count ++;
    appendStr ='';
  }
}

console.log(count);
