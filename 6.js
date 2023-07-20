// if else on js

let num1 = 40;
let num2 = 20;
let num3 = 60;
let data;
let sample = "the greater number is";

if(num1 > num2 && num1 > num3) {

  data = num1;
}
else if(num2 > num3 && num2 > num1)
 data = num2;

 else if (num3 > num1 && num3 > num2)
    data = num3;

console.log(sample, data);