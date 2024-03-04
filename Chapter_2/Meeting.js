// function that counts the number of meetings in a given month
function countMeetings(month) {
    if (month === 'February') {
        return 28;
    } else if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
        return 30
    } else {
        return 31
    }
}

console.log(countMeetings('February'));
// Call the countMeetings function for April and June
console.log(countMeetings('April'));
console.log(countMeetings('June'));
// count the number of meetings in a quarter    
function countMeetingsInQuarter(month1, month2, month3) {
    return countMeetings(month1) + countMeetings(month2) + countMeetings(month3);
}
console.log(countMeetingsInQuarter('January', 'February', 'March'));
