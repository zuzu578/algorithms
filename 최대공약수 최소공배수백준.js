const number = '542 238';
const arr = number.split(" ").map((item)=>parseInt(item));
const maxNumber = Math.max(...arr);
const minNumber = Math.min(...arr);

let commonFactor = 0;
for(let i = 1 ; i <= maxNumber ; i++){
  if(maxNumber % i=== 0 && minNumber % i===0){
      commonFactor = i;
  }
}

const part1 =  maxNumber/commonFactor;
const part2 =  minNumber/commonFactor;

console.log('최소공배수 =>' ,part1*part2*commonFactor);
console.log('최대공약수 =>' ,commonFactor);
