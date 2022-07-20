const input = 'We want to win the first prize';

let result = [];
const items = [];

input.split(' ').forEach((item)=>{
  items.push(item.split(''));
})

items.forEach((item)=>{
  result.push(item.reverse().join(''));
})

console.log(result.join(' '));


