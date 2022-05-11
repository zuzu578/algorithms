const solution =(s) =>{
    const result = [];
    let arr = s.split(" ");
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    result.push(min,max);
    return result.join(" ").toString();
}
