let arr = [1,1,2,3,4,3];
arr = arr.sort((a,b) => a-b);
let check = [];

const filteringFnc = (idx) => {
 arr = arr.filter((item)=>item !== idx);
}

for(let i = 0 ; i < arr.length ; i++){
  if(arr[i] !== undefined && arr[i] === arr[i+1]){
    check.push(arr[i]);
  }
}

check.forEach((item)=>{
  filteringFnc(item)
})

console.log(arr);
