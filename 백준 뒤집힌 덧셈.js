let input1 = '111';
let input2 = '111';

input1 = parseInt(input1.split('').reverse().join(''));
input2 = parseInt(input2.split('').reverse().join(''));

console.log((input1+input2).toString().split('').reverse().join(''));
