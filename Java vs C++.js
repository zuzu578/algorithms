//조건1) java => 첫 단어는 소문자로 쓰고, 다음 단어부터는 첫 문자만 대문자로 쓴다. 또, 모든 단어는 붙여쓴다.
//조건2) java => C++에서는 변수명에 소문자만 사용한다. 단어와 단어를 구분하기 위해서 밑줄('_')을 이용한다.

//const target = 'long_and_mnemonic_identifier';
const target = 'longAndMnemonicIdentifier';
const upperCaseStr = target.toLowerCase();

let result = '';

// case 1: c++ => java convention ( camelCase 변경 )
if (target.includes('_') && upperCaseStr === target) {
  // convert To java convention
  result = target
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
} else {
  result = target
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');
}
console.log(result);
