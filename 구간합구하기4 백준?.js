const input = '2 4';
const arr = input.split(' ').map((item)=>parseInt(item)).sort((a,b)=>a-b);

let number = 0 ;
for(let i = arr[0] ; i <= arr[1] ; i++){
    number += i;
}

console.log('number===>' ,number);

