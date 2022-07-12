const hasCard = [6 ,3, 2, 10, -10];
const targetCard = [10, 9, -5, 2, 3, 4, 5, -10];

for(let i = 0 ; i < targetCard.length ; i++){
  if(hasCard.indexOf(targetCard[i]) === -1){
    console.log(0);
  }else{
    console.log(1);
  }
}

// 혹은 set 으로 해결하면 

const arr1 = new Set([6,3,2,10,-10]);
const arr2 = new Set([10,9,-5,2,3,4,5,-10]);

arr2.forEach((item)=>{
  if(arr1.has(item)){
    console.log(1)
  }else{
    console.log(0)
  }
})
