function solution(n, m) {
   const arr = [n,m];
   const maxNum = Math.max(...arr);
   const test = {};
   const div = [];
   for(let i = 1 ; i <= maxNum ; i++){
       if(n % i ===0 && m % i ===0){
           test.a = i;
           test.b = n/i;
           test.c = m/i;
       }
   }

    
    div.push(test.a);
    div.push(test.a*test.b*test.c);
   
    return div;
}

