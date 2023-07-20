// filter out all the numbers in the array // aray map method/function

let nums = [1,2,3,4];
nums.filter(n => n%2 === 0)
.map(n => n*2)
.forEach((n)=>console.log(n));