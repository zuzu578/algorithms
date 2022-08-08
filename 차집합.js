const main = () => {
  const a = [2, 5 ,11, 7];
  const b = [9,7,4];  
  const result = []; 

  const check = (target) => {
    if(b.indexOf(target) == -1){
      result.push(target);
    }
  }
  const solution = () => {
    for(let i = 0 ; i < a.length ; i++){
      check(a[i]);
    }
  }
  solution();
  if(result.length === 0){
    console.log(0);
  }else{
  console.log(result);
  }
}

main();
