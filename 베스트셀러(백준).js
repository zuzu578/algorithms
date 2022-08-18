const target = [
  'a',
  'a',
  'a',
  'b',
  'b',
  'b'];

//1) set 을 이용하여 중복 제거된 elements 를 타겟으로 원본 배열과 비교하여 length count 

const setTarget = new Set([...target]);

let store = [];
Array.from(setTarget)
  .map((el) => target.filter((item) => item === el))
  .forEach((item) => store.push({ length: item.length, element: item[0] }));

const maxnumKey = Math.max(...store.map(item => item.length));
store = store.filter((item) => item.length === maxnumKey).sort((a, b) => {
  if (a.element < b.element) {
    return -1;
  }
});
console.log(store[0].element);

