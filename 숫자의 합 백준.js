const solutions = () => {
    let input = 54321;
    input = input.toString();  
    let answer = 0;
    for(let i = 0 ; i < input.length ; i++){
      answer += parseInt(input[i]);
    }
  console.log(answer)
}

solutions();
