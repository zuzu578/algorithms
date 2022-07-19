const input1 = '4 7';
const input2 = '1';

const arr = [...input1.split(' ') , ...input2.split(' ')];
console.log(arr.map((item)=>parseInt(item)).sort((a,b)=>a-b));
