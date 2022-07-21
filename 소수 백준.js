const a = 3;
const b = 4;
const n = 1;

let answer = '';
answer = (a/b).toString();

for(let i = answer.indexOf('.') ; i < answer.length ; i++){
  if(i === n+1){
      console.log(answer[i]);
  }
}
