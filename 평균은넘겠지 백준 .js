// https://www.acmicpc.net/problem/4344
const solutions = () => {
  const arr = [50 ,50, 70, 80, 100];
  let average = 0;
  let count = 0;
  arr.map(item=>average += item /arr.length);
  // const filtering = arr.filter(item=>item > average);
  // console.log(filtering)
  for(let i = 0 ; i < arr.length ; i ++){
    if(arr[i] > average){
      count ++;
    }
  }
  console.log((count / arr.length * 100).toFixed(3) )
}
solutions()





