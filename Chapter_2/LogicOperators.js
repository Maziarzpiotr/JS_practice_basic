// Logical operators
// negate the value of a boolean
let logText = "2.10.";
let exerciseCount = 0;
exerciseCount += 1;
let var1 = true;
let var2 = false;
let result

// Negate the value of var1
if (var1<var2) {
    result = true;
}
else 
    result = false;
console.log(logAndOperator(logText,exerciseCount),result);
exerciseCount += 1;
// Negate the condition
if (!(var1<var2)) {
    result = false;
}
else
    result = true;
console.log(logAndOperator(logText,exerciseCount),result);
exerciseCount += 1;
// check if var1 and var2 equals
if (var1!==var2) {
    result = true;
}
else
    result = false;
console.log(logAndOperator(logText,exerciseCount),result);
exerciseCount += 1;

// playing with AND and OR
if (var1 && var2) {
    result = true;
}
else
    result = false;
console.log(logAndOperator(logText,exerciseCount),result);
exerciseCount += 1;
if (var1 || var2) {
    result = true;
}
else
    result = false;
console.log(logAndOperator(logText,exerciseCount),result);
exerciseCount += 1;
if (var1 && !var2) {
    result = true;
}
else
    result = false;
console.log(logAndOperator(logText,exerciseCount),result);
exerciseCount += 1;




// function to returns logText with exerciseCount 
function logAndOperator(var1,var2){
    // if var2 is not number set 1
    if(isNaN(var2)) var2 = 1;
    var2 = var2.toString().padStart(3,0);
    return var1 + var2
}