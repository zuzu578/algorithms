// https://www.acmicpc.net/problem/8958
const solutions = () => {
  const input = 'OOXXOXXOOO';
  let num = 0;
  const sumArr = [];
  for(let i = 0 ; i < input.length ;i++){
    if(input[i] === 'O'){
        num ++;
    }else{
      num = 0;
    }
    sumArr.push(num);
  }
  let sumNumber = 0;
  for(let i = 0 ; i < sumArr.length ; i++){
    sumNumber = sumNumber + sumArr[i];
  }
  return sumNumber;
}

console.log(solutions());
