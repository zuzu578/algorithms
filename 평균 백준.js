// https://www.acmicpc.net/problem/1546
const solutions = () => {
  const arr =  [10 ,20 ,30];
  const maxScore = Math.max(...arr);
  console.log('max Scroe =>' , maxScore);
  const temp = arr.map((item)=>{
    return item/maxScore*100;
  })

 let sum = 0;
 temp.map((item)=>{
   sum += item;
 })
  console.log(sum/arr.length)
  
}

solutions();
