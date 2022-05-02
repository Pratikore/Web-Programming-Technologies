function calArea(rad){
    console.log("Area = "+Math.PI*rad*rad/4);
}
function calCircumference(rad){
    console.log("Circumference = "+2*Math.PI*rad);
}
function calDiameter(rad){
    console.log("Diameter = "+ rad*2);
}

exports.calArea=calArea;
exports.calCircumference=calCircumference;
exports.calDiameter=calDiameter;