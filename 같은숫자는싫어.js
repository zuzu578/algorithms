const solution = (arr) =>{
  // 1번째방식 
    const newArr = []
    for(let i = 0 ; i < arr.length ; i++){
        
        if(arr[i] !== arr[i+1]){
       
            newArr.push(arr[i]);
        }
    }
    
  // 2번째 방식 
   const result =  arr.filter((item,index)=>{
      return arr[index] !== arr[index+1];
    })
    
    console.log(result);
  
    
    return result;
    

}
