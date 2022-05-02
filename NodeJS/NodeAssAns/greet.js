exports.greet=function(time){
    if(time<12)
        console.log("Good morning...!");
    else if(time<18)
        console.log("Good Afternoon...!");
    else
        console.log("Good Evening...!");
}