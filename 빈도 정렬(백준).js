const obj = {};
const store = [];
const target = [11, 33, 11, 77, 54, 11, 25, 25, 33];
//const target = [2 ,1 ,2 ,1 ,2];
const compareTarget = target;
const thList = [];
let th = 1;

let start = new Date();  // 시작
const solution = () => {
  const check = (i) => {
    let count = 0;
    target.forEach((item, index) => {
      if (item === i) {
        count++;
      }
    });

    store.push
      (
        {
          th: store.find(item => item.target === i) !== undefined ? store.find(item => item.target === i).th : th++,
          target: i,
          count: count
        }
      );
  }

  compareTarget.forEach((item) => {
    check(item);
  })

  store.sort((a, b) => {
    // 빈도수 순으로 정렬 
    if (a.count > b.count) {
      return -1;
    }
    // count 가 같을경우 
    if (a.count === b.count && a.th < b.th) {
      return -1;
    }
  }).forEach(item => console.log(item.target));
}
solution();

let end = new Date();  // 종료

console.log('test sec =>', end - start); // 경과시간(밀리초) 3~4초 => 시간초과 
