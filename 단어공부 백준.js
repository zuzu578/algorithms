
const findDistinct = (searchChar,letters) => {
  
const text = letters;
let count = 0;
let pos = text.indexOf(searchChar); //pos는 0의 값을 가집니다.
const maxArr = [];

while (pos !== -1) {
  count++;
  pos = text.indexOf(searchChar, pos + 1); // 첫 번째 a 이후의 인덱스부터 a를 찾습니다.
}
console.log(searchChar,count); 
}




const solutions = () => {
  let letters = 'Mississipi';
  letters = letters.toUpperCase();
  for(let i = 0 ; i < letters.length ; i++){
    findDistinct(letters[i],letters)
  }
}


solutions();
