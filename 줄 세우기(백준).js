// acmicpc.net/problem/11536
// const target = ['HOPE',
// 'ALI',
// 'BECKY',
// 'JULIE',
// 'MEGHAN',
// 'LAUREN',
// 'MORGAN',
// 'CARLI',
// 'MEGAN',
// 'ALEX',
// 'TOBIN'];

const target = ['JOE',
'BOB',
'ANDY',
'AL',
'ADAM']

// const target = ['GEORGE',
// 'JOHN',
// 'PAUL',
// 'RINGO']

let result = '';

const store = [];

const isNeitherCheck = (num) => {
  let isNeither = false;
  store.push(num);
  if(store.length > 1){
    for(let i = 0 ; i < store.length ; i++){
      if(store[i+1] !== undefined && store[i] !== store[i+1]){
        isNeither = true;
      }
    }
  }
  return isNeither;
}
for(let i = 0 ; i < target.length ; i++){
  if(target[i+1] !== undefined){
    if(isNeitherCheck(target[i].localeCompare(target[i+1]))){
      result = 'neither';
    };
    if(!isNeitherCheck(target[i].localeCompare(target[i+1])) && target[i].localeCompare(target[i+1]) < 0){
      result = 'INCREASING';
    }
    else if(!isNeitherCheck(target[i].localeCompare(target[i+1])) && target[i].localeCompare(target[i+1]) === 1){
      result = 'DECREASING';
    }
  
    
  }
}
console.log(result);
