const firstNum = 0;
const secondNum = 0;

const isDivisor = (firstNum , secondNum) => {
    let store = [];
    for(let i = 1 ; i <= secondNum ; i++){
        if(secondNum % i === 0){
            store.push(i);
        }
    }
    store = store.filter(item=>item === firstNum);
    if(store.length === 0){
        return false;
    }else {
        return true;
    }
}

const isMultiple = (firstNum , secondNum) => {
    if(firstNum % secondNum === 0){
        return true;
    }else {
        return false;
    }
}

if(isDivisor(firstNum, secondNum)){
    console.log('factor');
}else if(isMultiple(firstNum , secondNum)){
    console.log('multiple');
}else {
    console.log('neither');
}
