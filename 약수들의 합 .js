const number = 6;
let num = 0;
const result = [];

for(let i = 1 ; i <=number ; i++){
  if(i !== number && number % i === 0){
    num += i;
    result.push(i);
  }
}

if(number === num){
  console.log(result.sort((a,b)=> a - b).join(' '));
}else {
  console.log('not');
}

