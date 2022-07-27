const fs = 'ab'; 
const ft = 'ababc'; 
let target = '';
// 1) 두개 문자 길이가 같을경우 ==> fs ft 비교 
if (fs.length === ft.length) {
  if (fs === ft) {
    console.log(1);
  } else {
    console.log(0);
  }
// 2) ft 가 긴경우  ft 기준길이로 fs 를 반복 붙여서 비교
} else if (ft.length > fs.length) {
  for (let i = 0; i < ft.length; i++) {
    target += fs;
    if (target.length === ft.length) {
      break;
    }
  }
  if (target === ft) {
    console.log(1);
  } else {
    console.log(0);
  }
// 3) fs 가 긴경우 fs 를 기준길이로 ft 를 반복 붙여서 비교 
} else if(ft.length < fs.length){
  for(let i = 0 ; i < fs.length ; i++){
    target += ft;
    if(target.length === fs.length){
      break;
    }
  }
  if (target === fs) {
    console.log(1);
  } else {
    console.log(0);
  }
}



