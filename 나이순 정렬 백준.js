// const obj = [
//   {
//     age : 21,
//     name :'Junkyu'
//   },
//   {
//     age : 21,
//     name :'Dohyun'
//   },
//   {
//     age : 20,
//     name :'Sunyoung'
//   }
// ]
const obj = [];
let input = `21 Junkyu 21 Dohyun 20 Sunyoung`;
input = input.split(' ');

const ageArr = [];
const nameArr = [];
for(let i = 0 ; i < input.length ; i++ ){
  if(isNaN(input[i]) === false){
    ageArr.push(input[i])
  }else{
    nameArr.push(input[i]);
  }
}

ageArr.forEach((item,index)=>{
  obj.push({
    age : ageArr[index],
    name : nameArr[index]
  })
})

obj.sort((a,b)=>{
  if(a.age < b.age){
    return -1;
  }
  if(a.name === b.name){
    return 0;
  }
}).forEach((item)=>{
  console.log(item);
})

