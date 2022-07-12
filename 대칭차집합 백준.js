const arr1 = [1,2,4];
const arr2 = [2,3,4,5,6];

const arrA = new Set(arr1);
const arrB = new Set(arr2);

const answer = new Set([...arrA,...arrB]);

arrA.forEach((a) => {
  if(arrB.has(a)){
  console.log('a ==========>' , a);
    answer.delete(a)
  }
})

console.log(answer.size)

