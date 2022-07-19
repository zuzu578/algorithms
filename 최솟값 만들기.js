const solution = (A,B) => {
    
    const numberArr1 = A.sort((a,b)=>a-b);
    const numberArr2 = B.sort((a,b)=>b-a);
    
    let number = 0;
    A.forEach((item,index)=>{
        number += item * B[index];    
    })
    
    return number;
}



