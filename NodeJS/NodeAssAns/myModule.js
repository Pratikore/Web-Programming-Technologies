function factorial(num){
    var res=1;
    if(num<=1)
        console.log("Factorial = " + res);
    else{
        for(i=1; i<=num ; i++)
            res=res*i;
        console.log("Factorial = "+res);
    }
}

function myPrime(num){
    if(num<2)
        console.log("Not a prime number");
    else if(num==2)
        console.log("Its a prime number");
    else{
        for(i=2; i<num ; i++)
        if(num%i==0)
            {
                console.log("Not a prime number");
                break;
            }
        else if(i==num-1)
            {
            console.log("Its a prime number");
            break;
            }
        else
            continue;

        }
    }

function printTable(num){
    for(i=1;i<=10;i++)
        {
            console.log(num+" * "+i + " = " + num*i);
        }
}

exports.factorial=factorial;
exports.myPrime=myPrime;
exports.printTable=printTable;