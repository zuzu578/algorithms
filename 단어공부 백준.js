const findDistinct = (searchChar,letters) => {

const text = letters;
const resultObj = {};
let count = 0;
let pos = text.indexOf(searchChar); //pos는 0의 값을 가집니다.

while (pos !== -1) {
  count++;
  pos = text.indexOf(searchChar, pos + 1); // 첫 번째 a 이후의 인덱스부터 a를 찾습니다.
}

  resultObj.char = searchChar;
  resultObj.count = count;

  return resultObj;

}

const solutions = () => {
  const resultArr =[];
  let letters = 'baaa';
  letters = letters.toUpperCase();
  for(let i = 0 ; i < letters.length ; i++){
     const resultObj = {
        char : findDistinct(letters[i],letters).char,
        count : findDistinct(letters[i],letters).count
      }
      resultArr.push(resultObj);
  }


  let uniqueObjArray = [
    ...new Map(resultArr.map((item) => [item["char"], item])).values(),];
  const maxValueOfArr = Math.max(...uniqueObjArray.map(o => o.count), 0);

  const filteringArr = uniqueObjArray.filter(item=> item.count === maxValueOfArr);
  if(filteringArr.length >=2){
    console.log('?')
  }else{
    const result = filteringArr.map(item=> item.char.toUpperCase())
    console.log(result.join(""))
  }
  
  
  
    
  

  
  
}


solutions();
