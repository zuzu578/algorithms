// input 1 , input 2 변수 
const n = 7;
const k = 3;
// 초기 2~N까지 모든 정수를 저장할배열
const allNumber = [];
// P의 배수를 저장할 arr
let pMultipleArr = [];
// 삭제할때 마다 몇번째 숫자를 삭제했는지 체크하는 변수
let removeCount = 0;
// 최종 몇번째 숫자를 삭제했는지 return 변수 
let result = '';

const solution = () => {
  let p;
  let isFirst = true;
  solve(isFirst);
}

// 삭제 function 
const removeArr = (target) => {
  removeCount++;
  const idx = allNumber.indexOf(target)
  if (idx > -1) allNumber.splice(idx, 1)
  if (removeCount === k) {
    console.log(`${k}번째 지워진 숫자는 ===> ${target}`)
    result = target;
  }
}

const solve = (isFirst) => {
  if (isFirst) {
    for (let i = 2; i <= n; i++) {
      allNumber.push(i);
    }
    isFirst = false;
  }
  p = Math.min(...allNumber);
  removeArr(p);
  for (let i = 0; i <= allNumber.length; i++) {
    if (allNumber[i] % p === 0) {
      pMultipleArr.push(allNumber[i]);
    }
  }
  for (let i = 0; i < pMultipleArr.length; i++) {
    removeArr(pMultipleArr[i]);
  }
  if (allNumber.length !== 0) {
    pMultipleArr = [];
    solve(isFirst)
  } else {
    console.log(result);
  }

}

solution();
