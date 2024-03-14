// utilities functions to used by other files

function addBorder(text) {
    let logText = '*'.repeat(10);
    console.log(logText + ' ' + text + ' ' + logText);
};
module.exports = {
    addBorder
};


