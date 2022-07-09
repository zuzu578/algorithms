let i = 10;

i = i+1;
let answer = 1;

const temp = () =>{

  i--;
  

  answer = i * answer;
  if(i === 1 || i <= 0){
    
    return;
  }else{
      temp()
  }

}

temp();
console.log(answer);



