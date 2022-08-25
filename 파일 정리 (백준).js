const target = ['sbrus.txt',
'spc.spc',
'acm.icpc',
'korea.icpc',
'sample.txt',
'hello.world',
'sogang.spc',
'example.txt'];

const store = []
// 파일이름 , 확장자 저장 
target.forEach((item)=>{
  store.push(item.split('.')[1]);
  // store.push({
  //   name : item.split('.')[0],
  //   extension : item.split('.')[1]
  // })
})

const obj = {};
for (let i = 0; i < store.length; i++) {
  // 없는경우 삽입 후 1 count 
  // 있으면 삽입한 count +1 
  obj[store[i]] = obj.hasOwnProperty(store[i]) ? obj[store[i]] + 1 : 1;
}

const result = [];

for (const [key, value] of Object.entries(obj)) {
  result.push({
    extension : key,
    count : value
  })
}

result.sort((a,b)=>{
  if(a.extension < b.extension){
    return -1;
  }
}).forEach(item=>console.log(item.extension , item.count));
