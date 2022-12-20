let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(x => Number(x));

let a = [1,1,2,2,2,8];
console.log(a.map((x,i) => x - input[i]).join(" "))