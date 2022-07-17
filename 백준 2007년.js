const years = '2007'
const month = '1';
const da = '1';
const date = new Date(`${years},${month},${da}`); 
 let day= date.toString().split(' ');
 console.log(day[0].toUpperCase())
          
