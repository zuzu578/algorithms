const input = 'call ball All Hall';

console.log(input.split(' ').sort((a,b)=>a.localeCompare(b))[0]);
