// 오답 . 보류중 
const input = '6 34 38';

const arr = input.split(" ").map((item)=>parseInt(item));

const maxNumber = Math.max(...arr);

const div = (number) => {
   for(let i = 0 ; i < arr.length ; i++){
    if(arr[0] % number === arr[1] % number && arr[1] % number === arr[2] % number){
        console.log(number);
    }
   }
}

const solutions = () => {

    for(let i = 2 ; i <= maxNumber; i++){
        div(i);
    }
}

solutions();
