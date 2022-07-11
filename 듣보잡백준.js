const nameList = [
    'ohhenrie',
    'charlie',
    'baesangwook',
    'obama',
    'baesangwook',
    'ohhenrie',
    'clinton'
];

const solution = () => {
    const result = nameList.filter((item,index)=>item === nameList[index]);
    console.log(result);
}

solution();
