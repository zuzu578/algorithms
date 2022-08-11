const target1 = 3;
const target2 = 16;
let store = [];
const result = [];

const prime = (target) => {
  for (let i = 1; i <= target; i++) {
    if (target % i === 0) {
      store.push(i);
    }
  }
  // 소수 = 1과 자기자신 ==> 갯수 2
  if (store.length === 2) {
    result.push(target);
  }
  store = [];
}
for (let i = target1; i <= target2; i++) {
  // 1 제외 
  if (i === 1) {
    continue;
  }
  prime(i);
}

console.log(result);
