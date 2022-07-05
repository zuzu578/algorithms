const solutions = () => {
  const letters = 'abcdefghijklnmopqrstuvwxyz';
  const input = 'baekjoon';

  for(let i = 0 ; i < letters.length ; i++){
    console.log(input.indexOf(letters[i]));
  }
 
}

solutions();
