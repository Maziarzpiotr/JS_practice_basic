//Bank account functions

// calculate control sum for given country code, bank code, account number
function generateIBANControlSum(accountNumber, countryCode) {
    const country = countryCode.toUpperCase();
    let accountNumberString = accountNumber.toString();
    //trimming spaces
    accountNumberString = accountNumberString.replace(/\s/g, "");
    // console.log(accountNumberString);

    const countryCodeString1 = countryCode.toString().substring(0, 1);
    const countryCodeString2 = countryCode.toString().substring(1, 2);
    // make a function that changes letters to numbers if A=10 B=11 C=12 etc
    const countryCodeNumber1 = countryCodeString1.charCodeAt(0) - 55;
    const countryCodeNumber2 = countryCodeString2.charCodeAt(0) - 55;
    // console.log(countryCodeNumber1 + " " + countryCodeNumber2);
    accountNumberString = accountNumberString + countryCodeNumber1 + countryCodeNumber2 + "00";
    // console.log(accountNumberString);
    let controlSum = 0; 
    let controlSumString = "";
    for (let i = 0; i < accountNumberString.length; i++) {
        controlSumString = controlSumString + accountNumberString[i];
        if (controlSumString.length === 9) {
            controlSum = parseInt(controlSumString) % 97;
            controlSumString = controlSum.toString();
        }
    }
    controlSum = 98 - controlSum;
    if (controlSum < 10) {
        controlSum = "0" + controlSum;
    }
    // console.log(controlSum);
    return controlSum;
}

// Example usage
let iban = "1140 1010 0000 4921 6000 1004";
const countryCode = "PL";
const controlSum = generateIBANControlSum(iban, countryCode);
// trim spaces from iban
iban = iban.replace(/\s/g, "");
const fullIBAN = countryCode + controlSum + iban;
console.log("before: "+iban, "after: "+fullIBAN);

// console.log(controlSum);
