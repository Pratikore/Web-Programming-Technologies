function add(num1,num2){
console.log(num1+num2);
}

function subtract(num1,num2){
console.log(num1-num2);
}

function multiply(num1,num2){
console.log(num1*num2);
}

function divide(num1,num2){
console.log(num1/num2);
}

function square(num1){
console.log(num1*num1);
}

function sum(){
    var sum=0;
    for (i=0;i<arguments.length;i++)
        sum=sum+arguments[i];
    console.log(sum);
}

function min(num1,num2,num3){
    let min = num1;
    if(min>num2)
    min=num2
    else if(min>num3)
    min=num3;
    else 
    min;
    console.log(min);
}
function max(num1,num2,num3){
    let max = num1;
    if(max<num2)
    max=num2
    else if(max<num3)
    max=num3;
    else 
    max;
    console.log(max);
}

exports.add=add;
exports.subtract=subtract;
exports.divide=divide;
exports.multiply=multiply;
exports.max=max;
exports.min=min;
exports.square=square;
exports.sum=sum;