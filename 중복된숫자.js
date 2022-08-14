const target = [1,2,2,5,6,4,3,3,7,8,9];

const result = [];
const check = (num) => {
  let count = 0 ;
  // num : 2 
  for(let i = 0 ; i < target.length ; i++){
    if(target[i] === num){
      count ++;
    }
    if(count >= 2){
      //console.log(num);
      result.push(num);
      count = 0;
    }
  }
}
target.forEach((item)=>{
  check(item);
});


console.log(result);
