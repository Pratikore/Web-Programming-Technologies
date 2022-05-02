exports.greet=function(time){
    if(time<12)
        return "Good morning...!";
    else if(time<18)
        return "Good Afternoon...!";
    else
        return "Good Evening...!";
}