const solution = () => {
  const input1 = 1234;
  const input2 = 1234;

  const target = [];
  const result = [];
  let compareArr = [];

  let setResult ; 
  // 배열에 한글자 씩 담아서 비교 
  // 중복이라면 삭제 
  // 아니면 삽입 
  const filteringFnc = (targetNumstr) => {
    for (let i = 0; i < targetNumstr.length; i++) {
      compareArr.push(targetNumstr[i]);
    }
    setResult = new Set([...compareArr]);
    compareArr = [];
    // 같은 숫자가 들어가지 않은 것들만 삽입
    if(setResult.size === targetNumstr.length){
      result.push(targetNumstr);
    }
  }
  for (let i = input1; i <= input2; i++) {
    target.push(i.toString());
  }

  for (let i = 0; i < target.length; i++) {
    filteringFnc(target[i]);
  }
  console.log(result.length);
  
}

solution();
