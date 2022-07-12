const number = '2';
let arr = number.split(" ").sort((a,b)=>a-b);1
arr = arr.map((item)=>parseInt(item));

const maxNumber = Math.max(...arr);
const minNumber = Math.min(...arr);

if(arr.length >= 2){
  console.log(maxNumber * minNumber);
}else {
  console.log(maxNumber * maxNumber);
}

