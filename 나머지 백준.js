// https://www.acmicpc.net/problem/3052
const solution = () => {
  const arr = [
42,
84,
252,
420,
840,
126,
42,
84,
420,
126


              ];

  const newArr = [];
  arr.map((item)=>{
    newArr.push(item%42);
  })
  console.log([...new Set(newArr)].length);
  
}

solution();
