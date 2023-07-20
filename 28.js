// recursion in js
let nums = 0;
function show(){
    nums++;
    console.log(nums);
    if(nums < 11293){
    show();
    }
}

show();