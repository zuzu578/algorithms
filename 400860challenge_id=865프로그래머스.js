function solution(n) {
    let answer = 0;
    const nToBinary = (n).toString(2);

    for(let i = n ; i< 1000000 ; i++){
        if(i === n){
            continue;
        }
        if( countLetters(nToBinary) === countLetters((i).toString(2))){
            console.log(i);
            answer = i;
            break;
        }
    }
   
    return answer;
}

function countLetters(l){
    let count = 0;
    for(let i = 0 ; i < l.length ;i++){
        if(l[i] === '1'){
            count ++;
        }
    }
    
    return count;
}
