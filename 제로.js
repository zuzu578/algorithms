const input = [1,
3,
5,
4,
0,
0,
7,
0,
0,
6];
const store = [];

for(let i = 0 ; i < input.length ; i ++){
  if(input[i] !== 0){
    store.push(input[i]);
    console.log('push===>',store);
  }
  if(input[i] === 0){
    store.pop();
    console.log('pop===>',store);
   
  }
}

let result = 0 ;
store.forEach(item=>result+=item);
console.log(result);
