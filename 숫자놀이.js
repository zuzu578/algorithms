const numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

let m = 8;
let n = 28;
const numRangeArr = [];
const numList = [];
for (let i = m; i <= n; i++) {
  numRangeArr.push(i.toString());
}
for (let i = 0; i < numRangeArr.length; i++) {
  if (numRangeArr[i].length === 1) {
    const letNum1 = numArr[parseInt(numRangeArr[i][numRangeArr[i].length - 1])];
    numList.push({
      originNum: parseInt(numRangeArr[i]),
      letterNum: letNum1
    })
  }
  if (numRangeArr[i].length === 2) {
    const letNum2 = numArr[parseInt(numRangeArr[i][numRangeArr[i].length - 2])].toString() +' '+ numArr[parseInt(numRangeArr[i]        [numRangeArr[i].length - 1])].toString();
    numList.push({
      originNum: parseInt(numRangeArr[i]),
      letterNum: letNum2
    })
  }

}

numList.sort((a,b)=>{
  if(a.letterNum < b.letterNum){
    return -1;
  }
}).forEach(item=>console.log(item.originNum));
