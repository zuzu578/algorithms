let input = `4 5`;
const arr = [];
input = input.split(' ').map((item)=>parseInt(item));

const solve = (param) => {
  for(let i = 1 ; i <= param; i++){
    if(param % i === 0){
      arr.push({target:param , values:i});
    }
  }
}

const count = (param) => {
  let answer = 0;
  if(arr.filter((el)=>el.target === param).length % 2 === 0){
    answer = 0;
  }else {
    answer = 1;
  }
  
  return answer;
}

input.forEach((item)=>solve(item));
input.forEach((item)=>console.log(count(item)));
