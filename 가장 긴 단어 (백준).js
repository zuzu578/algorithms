const target = `ACM International Collegiate Programming Contest (abbreviated as 
ACM-ICPC or just ICPC) is an annual multi-tiered computer programming 
competition among the universities of the world. The contest is 
sponsored by IBM. Headquartered at Baylor University, with autonomous 
regions on six continents, the ICPC is directed by Baylor Professor 
William B. Poucher, Executive Director, and operates under the 
auspices of the Association for Computing Machinery (ACM). 

  The 2012 ACM-ICPC Asia Hatyai Regional Programming Contest is 
held during 15-16 November 2012. It is hosted by Prince of Songkla 
University, Hatyai campus. E-N-D
`;
const reg = /[\{\}\[\]\/?.,;:|\)*~`!0-9^\_+<>@\#$%&\\\=\(\'\"]/gi;
const saveTarget = [];

let store = target.replace(reg, '')
  .replace('E-N-D', '')
  .split(' ')
  .filter((item) => item !== '')
  .map((item) => item.trim());
store = store.filter((item) => item !== '').forEach((item) => {
  saveTarget.push({
    element: item,
    length: item.length,
  })
});


// 1 방법) 배열을 순회하면서 문자들의 count 를 센다. 다순회한다면 , 순회했던것 들 중에서 count 가 제일큰 원소를 pick 

// 2 방법) list object 만들어서 각 element 와 element 의 length 저장하여 element 의 max 값을 도출한다.
//console.log(Math.max(...store));
const maxLengthKey = Math.max(...saveTarget.map((item) => item.length));
console.log(saveTarget.find((item) => item.length === maxLengthKey).element);

