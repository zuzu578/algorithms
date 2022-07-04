const solution = (idx,textNum) => {
  var text = textNum;
  var count = 0;
  var searchChar = idx; // 찾으려는 문자
  var pos = text.indexOf(searchChar); //pos는 0의 값을 가집니다.
  
  while (pos !== -1) {
    count++;
    pos = text.indexOf(searchChar, pos + 1); // 첫 번째 a 이후의 인덱스부터 a를 찾습니다.
  }
  console.log(count); // 로그에 14를 출력합니다.
}


const answer = (num1,num2,num3) => {
  const result = num1*num2*num3;
  const textNum = result.toString();
  for(let i = 0 ; i <= 9 ; i++){
    solution(String(i),textNum);
  }
}

answer(150,266,427);










