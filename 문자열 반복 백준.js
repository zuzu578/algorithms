const solutions = () => {
  const count = 5;
  const input = '/HTP';
  let answer = '';
  for(let i = 0 ; i < input.length ; i++){
    for(let j = 0 ; j < count ; j++){
      answer += input[i];
    }
  }

  console.log(answer)
}

solutions();
