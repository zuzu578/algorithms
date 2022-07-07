const arr = [5,
5,
2,
3,
4,
1];
arr.sort((a,b)=>{
  if(a<b){
    return -1;
  }
  if(a>b){
    return 1;
  }
  return 0;
})

const test = arr.filter((item,index)=>arr.indexOf(item) !== index);

console.log(Array.from(test))
