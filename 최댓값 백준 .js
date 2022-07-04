const solution = () => {
  const arr = [3, 29, 38, 12, 57, 74, 40, 85, 61];
 const maxElement = Math.max(...arr);
 console.log(arr.indexOf(maxElement) + 1);
  
}
solution();
