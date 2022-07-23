let input = `caseDoesMatter CaseDoesMatter`;
    
input = input.split(' ');
let temp = input[1].split('');

let index = 0;
const result = [];

const check = (param) => {
  for(index; index < temp.length ; index++){
    if(temp[index] === param){
      result.push(temp[index]);
      break;
    }
 }
}

for(let i = 0 ; i < input[0].length ; i++){
  check(input[0][i]);
}

if(result.join('') === input[0]){
  console.log('Yes');
}else{
  console.log('No');
}


