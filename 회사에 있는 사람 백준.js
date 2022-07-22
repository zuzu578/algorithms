let input1 = ['Baha','Askar','Baha','Artem'];
const input2 = ['enter','enter','leave','enter'];
let arr = [];
const store = [];

input1 = input1.sort((a,b)=>a.localeCompare(b)).sort((a,b)=>{
  if(a[1] > b[1]){
    return -1;
  }
});

input1.forEach((item,index)=>{
   arr.push({
    name:input1[index],
    flag:input2[index]
  })
})

arr.filter((item,index)=>arr[index+1] !== undefined && arr[index].name !== arr[index+1].name && item.flag !== 'leave').forEach((item)=>{
  console.log(item.name);
});

