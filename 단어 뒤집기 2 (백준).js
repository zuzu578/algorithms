//let target = '<int><max>2147483647<long long><max>9223372036854775807';
let target = 'one1 two2 three3 4fourr 5five 6six';
// no tag 
if (!target.includes("<") || !target.includes(">")) {
  console.log(target.split(' ').map(item => item.split('').reverse().join('')).join(' '));
} else {
  let store = [];
  for (let i = 0; i < target.length; i++) {

    if (target[i] === '<') {
      isChevron = true;
    }
    // 각괄호 point 가 끝남 
    if (target[i] === '>') {
      isChevron = false;
    }
    if (!isChevron) {
      store.push(target[i]);
    }
  }
  store
    .join('')
    .split('>')
    .filter(item => item !== '')
    .forEach(item => target = target.replace(item, item.split('').reverse().join('')));
  console.log(target)

}
