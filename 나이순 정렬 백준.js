const obj = [
  {
    age : 21,
    name :'Jugggnkyu'
  },
  {
    age : 21,
    name :'Tohyun'
  },
  {
    age : 10,
    name :'Sunyoung'
  }
]

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

