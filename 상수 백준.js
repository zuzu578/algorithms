let input1 = 221;
let input2 = 231;

input1 = input1.toString().split("");
input2 = input2.toString().split("");

input1 = parseInt(input1.reverse().join(""));
input2 = parseInt(input2.reverse().join(""));

const arr = [];
arr.push(input1);
arr.push(input2);

console.log(Math.max(...arr));
