const target = ['ENTER',
  'pjshwa',
  'chansol',
  'chogahui05',
  'ENTER',
  'pjshwa',
  'chansol'];

const store = [];
let answer = 0;
let isSomeOneEnterThisRoom = false; // 새로운사람이 들어왔는지 에대한 true false 값 
let enterCount = 0; // 새로운사람이 들어온 횟수 

for (let i = 0; i < target.length; i++) {
  // 새로운 사람이 들어온다면 
  if (target[i] === 'ENTER') {
    enterCount++; // count ++ -> 새로운 사람이 들어올때마다 count flag 변경되어서 구분가능 
    isSomeOneEnterThisRoom = true; // 새로운사람이 들어왔다는 flag 
  }
  // enter 제외한 , 새로운사람에게 인사한 사람을 obj에 저장 
  if (isSomeOneEnterThisRoom && target[i] !== 'ENTER') {
    store.push({ enterCount: enterCount, target: target[i] })
  }
}
const keyStore = [];

for (let key of store) {
  // 새로운 사람에게 인사한 사람 구분을 위함 
  // ex) ENTER => 1 로 하고 또 새로운 사람이 ENTER 했다면 => 2로 표기 되는것
  keyStore.push(key.enterCount);
}

const keySet = new Set([...keyStore]);

const makeAnswerFnc = (key) => {
  // ex) 
  // 새로들어온 사람 1 에게 채팅을 친 사람들을 filter 
  // 새로들어온 사람 2 에게 채팅을 친 사람들을 filter 
  const filterArr = store.filter((item) => item.enterCount === key);
  // 중복적으로 같은 채팅을 치면 count X => 중복을 제거한 array의 length target 들을 합하여 answer 에   저장 
  let uniqueObjArray = [
    ...new Map(filterArr.map((item) => [item["target"], item])).values(),];
  answer = answer + uniqueObjArray.length;
}
for (let i = 0; i < Array.from(keySet).length; i++) {
  makeAnswerFnc(Array.from(keySet)[i]);
}

console.log(answer);
