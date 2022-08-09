const mainFnc = () => {

  const input = `5 2233 1601 90100 13009 802 50000000 301 7654321 210`;
  const target = input.split(' ');
  const store = [];

  const remover = (target, itemSize) => {

    // 0 flag 
    let zeroFlag = false;
    // 0이 모두 삭제되었는지 flag
    let isAlreadyDeleted = false;
    // itemSize : element 원본 size 
    for (let i = 0; i < itemSize; i++) {
      // 첫글자가 0 이라면 
      if (target[0] === '0') {
        zeroFlag = true;
      } else {
        // 첫글자가 0 이 아닌 경우 
        zeroFlag = false;
        isAlreadyDeleted = true;
        break;
      }
      // 첫글자가 0 이고 , zero플래그가 true 이며 , 이미 모든 0 이 삭제되지않을경우 0 를 제거 
      if (target[0] === '0' && zeroFlag === true && isAlreadyDeleted === false) {
        target = target.substr(1, itemSize);
      }
    }
    // 최종 연산된 data 삽입
    store.push(target);
  }
  target.forEach(item => remover(item.split('').reverse().join(''), item.length));
  // 데이터 정렬 
  const result = store.map(item => parseInt(item)).sort((a, b) => a - b).join(' ');
  console.log(result);

}

mainFnc();
