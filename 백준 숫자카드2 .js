const hasCards = [6,3,2,10,10,10,-10,-10,7,3];
const targetCards = [10,9,-5,2,3,4,5,-10];

const countFnc = (targets) => {
    let count = 0 ;
    for(let i = 0 ; i < hasCards.length ; i ++){
        if(hasCards[i] === targets){
            count ++;
        } 
    } 
    return count;  
}

// main fucntion 
const solution = () => {
    const resultArr = [];
    for(let i = 0 ; i < targetCards.length ; i++){
        resultArr.push(countFnc(targetCards[i]));
    }
  console.log(resultArr.join(" "));
}

solution();
