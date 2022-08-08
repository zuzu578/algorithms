const input = [
1000,
2000,
3000,
4000,
].sort((a,b) => a-b);
const targetSize = 5;
const minNum = Math.min(...input);
const target = [];
const result = [];

const set1 = new Set([...input]);
const arr = Array.from(set1);
const checkArr = [];

for(let i = 0 ; i < arr.length ; i++){
  if(arr[i] - arr[i-1] === 1){
    checkArr.push(arr[i]);
    checkArr.push(arr[i-1]);
  }
}
// 이미 충분히 연속되는 5개원소로 이루어진 배열일 경우 
const checkSet = new Set([...checkArr]);
if(checkSet.size === 5){
  console.log(0)
}else{
  for(let i = minNum ; i < minNum + targetSize ; i++){
    target.push(i);
  }
  const set2 = new Set([...target]);
  
  for( let item of set2){
    if(!set1.has(item)){
      result.push(item);
    }
  }

  console.log(result , result.length);  
}
