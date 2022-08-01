const input = `baekjoon`;
let arr = [];
const temp = [];

const test = (index) => {
  for(let i = index ; i < input.length ; i++){
    arr.push(input[i]);
  }
  temp.push(arr.join(''));
  arr = [];
}

const call = () => {
  for(let i = 0 ; i < input.length ; i++){
     test(i);
  }
}
call();

temp.sort((a,b)=>{
  if(a<b){
    return -1;
  }
}).forEach((item)=>{
  console.log(item);
})


