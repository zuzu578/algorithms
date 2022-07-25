const input = 10;
let num = 0;
const arr = [];
let count = 0;

const check = (number) => {
  for (let i = number; i <= input; i++) {
      num += i;
      if(num === input){
        count ++;
        num = 0;
        break;
      }
      if(number === input){
        count++;
      }
      if(i === input){
        num = 0;
      }
  }
}

for (let i = 1; i <= input; i++) {
  check(i);
}

console.log(count);
