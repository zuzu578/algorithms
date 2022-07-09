const hasCard = [6 ,3, 2, 10, -10];
const targetCard = [10, 9, -5, 2, 3, 4, 5, -10];

for(let i = 0 ; i < targetCard.length ; i++){
  if(hasCard.indexOf(targetCard[i]) === -1){
    console.log(0);
  }else{
    console.log(1);
  }
}
