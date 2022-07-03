function solution(new_id) {
    let answer = '';
    const reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi
    answer = new_id
        .toLowerCase()
        .replace(reg,"")
        .replace("...",".")
        .replace("..",".")
    
   if(answer[0] === "."){
      answer = answer.slice(1,answer.length);
   }
   if(answer === ""){
       for(let i = 0 ; i < new_id.length ; i++){
           answer += "a";
       }
   }
   if(answer.length >= 16){
       console.log(answer)

       for(let i = answer.length-1; i >0 ; i--){
          
           answer = answer.replace(answer[i],'')
           if(i == 15){
               break;
           }
       }
   }
   if(answer[answer.length-1] === "."){
     answer = answer.replace(answer[answer.length-1] , '')
   }
    if(answer.length <3){
        let lastStr = answer[answer.length-1];
        for(let k = 0 ; k <= 3 ; k++){
            
            answer += lastStr
            if(answer.length >= 3){
                break;
            }
        } 
        
    }
    
    return answer;
}
