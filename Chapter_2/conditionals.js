// playing with conditionals instructions
const utils = require('./utils.js');
let logText = "2.11.";
let exerciseCount = 0;
exerciseCount += 1;

let var1 = true;
let var2 = false;
let result;
if (var1==var2) {
    result = "var1 equals var2";
}
else
    result = "var1 does not equal var2";

console.log(utils.logExerciseNumber(logText,exerciseCount),result);
exerciseCount += 1;
// if statement without parentheses
if (var1!=var2) 
result = "var1 does not equal var2"; // this is the only line that is part of the if statement
result = "var1 equals var2";
    
console.log(utils.logExerciseNumber(logText,exerciseCount),result);
exerciseCount += 1;
// if else statement without parentheses
if (var1!=var2)
    result = "var1 does not equal var2";
else
    result = "var1 equals var2";
console.log(utils.logExerciseNumber(logText,exerciseCount),result);
exerciseCount += 1;
// if else statement with parentheses
if (var1!=var2)
    {result = "var1 does not equal var2";}
else
    {result = "var1 equals var2";}
console.log(utils.logExerciseNumber(logText,exerciseCount),result);
exerciseCount += 1;
// if else statement with parentheses and multiple lines
if (var1!=var2)
    {
        result = "var1 does not equal var2";
    }
else
    {
        result = "var1 equals var2";
    }
console.log(utils.logExerciseNumber(logText,exerciseCount),result);
exerciseCount += 1;

// if elseif else statement
if (var1!=var2)
    result = "var1 does not equal var2";
else if (var1===var2)
    result = "var1 equals var2";
else
    result = "var1 is not equal to var2";
console.log(utils.logExerciseNumber(logText,exerciseCount),result);
exerciseCount += 1;
// if elseif else statement with parentheses
if (var1!=var2)
    {result = "var1 does not equal var2";}
else if (var1===var2)
    {result = "var1 equals var2";}
else

    {result = "var1 is not equal to var2";}
console.log(utils.logExerciseNumber(logText,exerciseCount),result);
exerciseCount += 1;
// if elseif else statement with parentheses and multiple lines
if (var1!=var2)
    {
        result = "var1 does not equal var2";
    }
else if (var1===var2)
    {
        result = "var1 equals var2";
    }
else
    {
        result = "var1 is not equal to var2";
    }
console.log(utils.logExerciseNumber(logText,exerciseCount),result);
exerciseCount += 1;
// if statemet without else
if (var1!=var2)
    {   
        result = "var1 does not equal var2";
    }
else if (var1===var2)
    {   
        result = "var1 equals var2";
    }
console.log(utils.logExerciseNumber(logText,exerciseCount),result);
exerciseCount += 1;
// ternary operator - 010
result = (var1!=var2) ? "var1 does not equal var2" : "var1 equals var2";
console.log(utils.logExerciseNumber(logText,exerciseCount),result);
exerciseCount += 1;
// ternary operator with parentheses - 011
result = (var1!=var2) ? ("var1 does not equal var2") : ("var1 equals var2");
console.log(utils.logExerciseNumber(logText,exerciseCount),result);
exerciseCount += 1;
// ternary operator with parentheses and multiple lines - 012
result = (var1!=var2) ? 
    ("var1 does not equal var2") : 
    ("var1 equals var2");
console.log(utils.logExerciseNumber(logText,exerciseCount),result);
exerciseCount += 1;
// ternary operator example with numbers - 013
let price = 10;
result = (price > 10) ? "expensive" : "cheap";
console.log(utils.logExerciseNumber(logText,exerciseCount),result);
exerciseCount += 1;
// ternary operator example with numbers - 014
result = (price > 10) ? (price * 0,8) : (price*0,2);
console.log(utils.logExerciseNumber(logText,exerciseCount),result);
exerciseCount += 1;
// ternary operator example with numbers - 015
price = 20;
result = (price > 10) ? (price * 0,8) : (price*0,2);
console.log(utils.logExerciseNumber(logText,exerciseCount),result);
exerciseCount += 1;
// switch statement - 016
let day = 3;
switch (day) {
    case 1 : result = "Monday";
    break;
    case 2 : result = "Tuesday";
    break;
    case 3 : result = "Wednesday";
    break;
    case 4 : result = "Thursday";
    break;
    case 5 : result = "Friday";
    break;
    default : 
        if (day > 10) {
            result = "not day";
        } else {
            result = "Weekend";
        }
};
console.log(utils.logExerciseNumber(logText,exerciseCount),result);
exerciseCount += 1;
// switch statement - 017
day = 6;
result = utils.getDayOfWeek(day);
console.log(utils.logExerciseNumber(logText,exerciseCount),result);
exerciseCount += 1;

