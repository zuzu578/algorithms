const target = ['baekjoononlinejudge',
'startlink',
'codeplus',
'sundaycoding',
'codingsh',
'baekjoon',
'codeplus',
'codeminus',
'startlink',
'starlink',
'sundaycoding',
'codingsh',
'codinghs',
'sondaycoding',
'startrink',
'icerink'];

const targetSet = new Set([...target]);
console.log(target.length - Array.from(targetSet).length);
