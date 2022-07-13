const input = [4, 2];
const N = input.shift(); // 4 
const M = input.shift(); // 2

const visited = new Array(N);

let output = [];
// output = [1]
function dfs(cnt) {
  // cnt = 0;
  // m = 2;
  
  if (cnt === M) {
    print();
    return;
  }
  // n = 4
  // i = 0
  //     [true,  ]
  for (let i = 0; i < N; i++) {
    
    if (visited[i] === true) {
      continue;
    }
    visited[i] = true;
    output.push(i + 1); // 1,1,1
    dfs(cnt + 1);
    output.pop();
    visited[i] = false;
  }
}

function print() {
  console.log(output.join(' '));
}

dfs(0);
