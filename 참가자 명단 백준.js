// 청팀을 먼저, 백팀을 나중에 출력한다.
// 각각의 팀에 대해 학급을 오름차순으로 출력한다.
// 각각의 학급에 대해 학생의 이름을 길이가 짧은 것부터, 길이가 같다면 사전 순으로 출력한다.

const classList = [3,2,2,1,3,2,4];
const nameList = ['sunyoung','junkyu','dohyun','minjun','kihyun','damin','hyunsu'];

const store = [];
for(let i = 0 ; i < classList.length ; i ++){
  store.push(
    {
      class:classList[i],
      name:nameList[i]
    }
  )
}
// 1) 홀수인 애들만 먼저 담고 
// 2) 홀수인 애들끼리 정렬 
// 3) 마지막에 짝수 담기 
// 4) 짝수인 애들끼리 정렬 
// 5) 이름 정렬 
let oddArr = [];
let evenArr = [];
store.forEach((item)=>{
  if(item.class % 2 !== 0){
    oddArr.push(item);
  }else {
    evenArr.push(item);
  }
});

oddArr = oddArr.sort((a,b)=>{
  // 학급을 오름차 순으로 정렬 
  if(a.class < b.class){
    return -1;
  }
  // 이름이 짧은거 부터 정렬 (같은 학급끼리)
  if(a.class === b.class && a.name.length < b.name.length){
    return -1;
  }
  // 이름의 길이가 같을경우 같은학급 에서 이름의 길이가 같은 애들끼리 정렬 
  if(a.class === b.class && a.name.length === b.name.length){
    return a.name.localeCompare(b.name);
  }
  
});

evenArr = evenArr.sort((a,b)=>{
  // 학급을 오름차 순으로 정렬 
  if(a.class < b.class){
    return -1;
  }
  // 이름이 짧은거 부터 정렬 (같은 학급끼리)
  if(a.class === b.class && a.name.length < b.name.length){
    return -1;
  }
  // 이름의 길이가 같을경우 같은학급 에서 이름의 길이가 같은 애들끼리 정렬 
  if(a.class === b.class && a.name.length === b.name.length){
    return a.name.localeCompare(b.name);
  }
})
let check = '';
evenArr.forEach((item,index)=>{
  console.log(item)
 
})
const result = [...oddArr , ...evenArr];
//result.forEach((item)=>console.log(item.class , item.name));
