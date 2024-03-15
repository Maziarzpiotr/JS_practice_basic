// utilities functions to used by other files

function addBorder(text) {
    let logText = '*'.repeat(10);
    console.log(logText + ' ' + text + ' ' + logText);
};

// function to returns logText with exerciseCount 
function logExerciseNumber(var1,var2){
    // if var2 is not number set 1
    if(isNaN(var2)) var2 = 1;
    var2 = var2.toString().padStart(3,0);
    return var1 + var2
};
// Function from switch statement
function getDayOfWeek(day) {
    let result;
    switch (day) {
        case 1:
            result = "Monday";
            break;
        case 2:
            result = "Tuesday";
            break;
        case 3:
            result = "Wednesday";
            break;
        case 4:
            result = "Thursday";
            break;
        case 5:
            result = "Friday";
            break;
        case 6:
        case 7:
            result = "Weekend";
            break;
        default:
            if (day <1  ) {
                result = "number is too low";
            } else {
                result = "not week day";
            }
    }
    return result;
};
module.exports = {
    addBorder,logExerciseNumber,getDayOfWeek
};