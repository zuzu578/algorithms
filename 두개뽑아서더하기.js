function solution(numbers) {
   const temp = [];
   numbers.sort();
    // 1,1,2,3,4
   // test code
     const set = new Set(numbers);
    
    for(let i = 0 ; i < numbers.length ; i++){
        for(let j = i+1 ; j < numbers.length ; j++){
           let sum = numbers[i] + numbers[j];
            if( temp.indexOf(sum) === -1) {
              temp.push(sum);
            }
        }
    }
    const uniqueArr = temp.filter((element, index) => {
    return temp.indexOf(element) === index;
});
    return uniqueArr 
    
}
