const target = 'h*n';

const compare = [
  'huhovdjestvarnomozedocisvastan',
  'honijezakon',
  'atila',
  'je',
  'bio',
  'hun'
]
const firstTargetWord = target[0];
const lastTargetWord = target[target.length - 1];

compare.forEach((item) => {
  if (item[0] === firstTargetWord && item[item.length - 1] === lastTargetWord) {
    console.log('DA');
  } else {
    console.log('NE');
  }
})
