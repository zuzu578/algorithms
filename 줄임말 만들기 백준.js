let input = 'micro soft';
const filterLet = ['i', 'pa', 'te', 'ni', 'niti', 'a', 'ali', 'nego', 'no', 'ili'];
input = input.split(' ');



const delTarget = [];
for(let i = 0 ; i < input.length ; i ++){
  if(filterLet.includes(input[0])){
    console.log('no')
  }else if(filterLet.includes(input[i])){
      
    delete input[input.indexOf(input[i])];
  }
}

input = input.map((item)=> item.toUpperCase());
input = input.filter((item) => item!= undefined);

const result = [];
for(let i = 0 ; i < input.length ; i++){
  result.push(input[i][0]);
}

console.log(result.join(''));
