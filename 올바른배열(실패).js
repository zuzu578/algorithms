let arr = [6,
5,
7,
9,
8492,
8493,
192398];
// 5,6,7,9
const temp = [];
let count = 0;
arr = arr.sort((a,b)=>a-b);
for(let i = 0 ; i < arr.length ; i ++) {
  if(arr[i] - arr[i+1] === -1){
    console.log(arr[i] , arr[i+1])
    temp.push(arr[i]);
    temp.push(arr[i+1]);
    
  }
}

const set = new Set(temp);
const uniqueArr = [...set];
console.log('test',uniqueArr)
