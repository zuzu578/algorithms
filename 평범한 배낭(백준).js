const maxWeight = 7;
const valueTargets = [13, 8, 6, 12];
const weightTargets = [6, 4, 3, 5];
const targetList = [];
let result = 0;

const check = (target) => {
  for (let i = 0; i < weightTargets.length; i++) {
    // 자기 자신을 제외 하고 , 합이 7이하인것만 filtering 
    if (weightTargets[i] !== target) {
      if (weightTargets[i] + target <= 7) {
       result = result+targetList.find((item)=>item.weight === target).value;
      }
    }
  }
}

valueTargets.forEach((item, index) => {
  targetList.push({
    weight: weightTargets[index],
    value: item
  })
})

targetList.forEach((item) => {
  check(item.weight);
})

console.log(result);
