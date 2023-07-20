// passing default value to function\

function add (num1, num2 = 20){
    return num1 + num2;
}

let total = add(15); // only passed one argument that is 15 to parameter num1, num2 will take default value 20
console.log(total);