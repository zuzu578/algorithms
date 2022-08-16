const target = 2931;
const div = 30;
if(target === div){
  console.log(target);
}
const store = target.toString().split('').sort((a,b)=>b-a).map((item)=>parseInt(item)).join('');

if(store % div === 0){
  console.log(store);
} else{
  console.log(-1);
}
