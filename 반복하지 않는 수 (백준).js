let target = 25;

let compare1;
let compare2;
let result ;
for (let i = 1; i <= target; i++) {
  compare1 = i.toString().split('');
  compare2 = new Set(...[i.toString().split('')]);

  if (compare1.length !== Array.from(compare2).length) {
    target++;
    continue;
  }
  result = i;
}

console.log(result);
