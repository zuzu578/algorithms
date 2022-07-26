let input = `Union of Computer Programming Contest club contest`;
const target = 'UCPC';
const store = [];
input = input.split(' ');

for(let i = 0 ; i < input.length ; i ++){
   if(input[i][0] === input[i][0].toUpperCase()){
     store.push(input[i][0]);
   }
}

if(target === store.join('')){
  console.log(`I love UCPC`)
}else {
  console.log(`I HATE UCPC`)
}
